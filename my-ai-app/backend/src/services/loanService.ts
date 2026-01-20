import prisma from '../lib/prisma';
import { LoanStatus, BookStatus } from '@prisma/client';

/**
 * 申请借阅
 */
export const applyLoan = async (userId: number, copyId: number) => {
  // 1. 检查书籍副本是否存在
  const copy = await prisma.bookCopy.findUnique({
    where: { id: copyId },
    include: { book: true },
  });
  
  if (!copy) {
    throw new Error('COPY_NOT_FOUND');
  }
  
  // 2. 检查副本状态是否可借
  if (copy.status !== BookStatus.AVAILABLE) {
    throw new Error('COPY_NOT_AVAILABLE');
  }
  
  // 3. 检查用户是否已经申请过这本书（待审核或借阅中）
  const existingLoan = await prisma.loan.findFirst({
    where: {
      userId,
      copyId,
      status: { in: [LoanStatus.PENDING, LoanStatus.APPROVED] },
    },
  });
  
  if (existingLoan) {
    throw new Error('ALREADY_APPLIED');
  }
  
  // 4. 创建借阅申请（事务）
  const loan = await prisma.$transaction(async (tx) => {
    // 更新副本状态为预留（防止他人同时申请）
    await tx.bookCopy.update({
      where: { id: copyId },
      data: { status: BookStatus.RESERVED },
    });
    
    // 创建借阅记录
    return tx.loan.create({
      data: {
        userId,
        copyId,
        status: LoanStatus.PENDING,
      },
      include: {
        copy: {
          include: { book: true },
        },
      },
    });
  });
  
  return loan;
};

/**
 * 获取用户的借阅记录
 */
export const getMyLoans = async (userId: number, status?: LoanStatus) => {
  const where: any = { userId };
  if (status) {
    where.status = status;
  }
  
  return prisma.loan.findMany({
    where,
    include: {
      copy: {
        include: {
          book: {
            include: { category: true },
          },
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
};

/**
 * 获取用户的单个借阅详情
 */
export const getMyLoanById = async (userId: number, loanId: number) => {
  const loan = await prisma.loan.findFirst({
    where: { id: loanId, userId },
    include: {
      copy: {
        include: {
          book: {
            include: { category: true },
          },
        },
      },
    },
  });
  
  if (!loan) {
    throw new Error('LOAN_NOT_FOUND');
  }
  
  return loan;
};

// ============ 管理员接口 ============

/**
 * 获取所有借阅记录（管理员）
 */
export const getAllLoans = async (options?: {
  status?: LoanStatus;
  page?: number;
  limit?: number;
}) => {
  const { status, page = 1, limit = 20 } = options || {};
  
  const where: any = {};
  if (status) {
    where.status = status;
  }
  
  const [loans, total] = await Promise.all([
    prisma.loan.findMany({
      where,
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
        copy: {
          include: {
            book: { select: { id: true, title: true, author: true, coverImage: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.loan.count({ where }),
  ]);
  
  return { loans, total, page, limit };
};

/**
 * 获取待审核列表
 */
export const getPendingLoans = async () => {
  return prisma.loan.findMany({
    where: { status: LoanStatus.PENDING },
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
      copy: {
        include: {
          book: { select: { id: true, title: true, author: true, coverImage: true } },
        },
      },
    },
    orderBy: { createdAt: 'asc' },
  });
};

/**
 * 获取借阅详情（管理员）
 */
export const getLoanById = async (loanId: number) => {
  const loan = await prisma.loan.findUnique({
    where: { id: loanId },
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
      copy: {
        include: {
          book: { include: { category: true } },
        },
      },
    },
  });
  
  if (!loan) {
    throw new Error('LOAN_NOT_FOUND');
  }
  
  return loan;
};

/**
 * 批准借阅
 */
export const approveLoan = async (loanId: number, borrowDays: number = 30) => {
  const loan = await prisma.loan.findUnique({
    where: { id: loanId },
  });
  
  if (!loan) {
    throw new Error('LOAN_NOT_FOUND');
  }
  
  if (loan.status !== LoanStatus.PENDING) {
    throw new Error('INVALID_STATUS');
  }
  
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + borrowDays);
  
  return prisma.$transaction(async (tx) => {
    // 更新借阅状态
    const updatedLoan = await tx.loan.update({
      where: { id: loanId },
      data: {
        status: LoanStatus.APPROVED,
        dueDate,
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
        copy: { include: { book: true } },
      },
    });
    
    // 更新副本状态为已借出
    await tx.bookCopy.update({
      where: { id: loan.copyId },
      data: { status: BookStatus.BORROWED },
    });
    
    return updatedLoan;
  });
};

/**
 * 拒绝借阅
 */
export const rejectLoan = async (loanId: number, reason: string) => {
  const loan = await prisma.loan.findUnique({
    where: { id: loanId },
  });
  
  if (!loan) {
    throw new Error('LOAN_NOT_FOUND');
  }
  
  if (loan.status !== LoanStatus.PENDING) {
    throw new Error('INVALID_STATUS');
  }
  
  return prisma.$transaction(async (tx) => {
    // 更新借阅状态
    const updatedLoan = await tx.loan.update({
      where: { id: loanId },
      data: {
        status: LoanStatus.REJECTED,
        rejectReason: reason,
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
        copy: { include: { book: true } },
      },
    });
    
    // 恢复副本状态为可用
    await tx.bookCopy.update({
      where: { id: loan.copyId },
      data: { status: BookStatus.AVAILABLE },
    });
    
    return updatedLoan;
  });
};

/**
 * 确认归还
 */
export const returnLoan = async (loanId: number) => {
  const loan = await prisma.loan.findUnique({
    where: { id: loanId },
  });
  
  if (!loan) {
    throw new Error('LOAN_NOT_FOUND');
  }
  
  if (loan.status !== LoanStatus.APPROVED && loan.status !== LoanStatus.OVERDUE) {
    throw new Error('INVALID_STATUS');
  }
  
  return prisma.$transaction(async (tx) => {
    // 更新借阅状态
    const updatedLoan = await tx.loan.update({
      where: { id: loanId },
      data: {
        status: LoanStatus.RETURNED,
        returnDate: new Date(),
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
        copy: { include: { book: true } },
      },
    });
    
    // 恢复副本状态为可用
    await tx.bookCopy.update({
      where: { id: loan.copyId },
      data: { status: BookStatus.AVAILABLE },
    });
    
    return updatedLoan;
  });
};
