import { Context } from 'koa';
import * as loanService from '../services/loanService';
import { LoanStatus } from '@prisma/client';

// ============ 用户接口 ============

/**
 * 申请借阅
 * POST /api/loans/apply
 */
export const applyLoan = async (ctx: Context) => {
  const userId = ctx.state.user.userId;
  const { copyId } = ctx.request.body as { copyId: number };
  
  if (!copyId) {
    ctx.status = 400;
    ctx.body = { message: '请提供书籍副本ID' };
    return;
  }
  
  try {
    const loan = await loanService.applyLoan(userId, copyId);
    ctx.status = 201;
    ctx.body = {
      message: '借阅申请已提交，等待审核',
      data: loan,
    };
  } catch (error: any) {
    const errorMap: Record<string, { status: number; message: string }> = {
      COPY_NOT_FOUND: { status: 404, message: '书籍副本不存在' },
      COPY_NOT_AVAILABLE: { status: 400, message: '该书籍当前不可借阅' },
      ALREADY_APPLIED: { status: 400, message: '您已申请过该书籍' },
    };
    
    const err = errorMap[error.message] || { status: 500, message: '申请失败' };
    ctx.status = err.status;
    ctx.body = { message: err.message };
  }
};

/**
 * 获取我的借阅记录
 * GET /api/loans/my
 */
export const getMyLoans = async (ctx: Context) => {
  const userId = ctx.state.user.userId;
  const status = ctx.query.status as string | undefined;
  
  const loans = await loanService.getMyLoans(
    userId,
    status as LoanStatus | undefined
  );
  
  ctx.body = { data: loans };
};

/**
 * 获取借阅详情
 * GET /api/loans/my/:id
 */
export const getMyLoanById = async (ctx: Context) => {
  const userId = ctx.state.user.userId;
  const loanId = parseInt(ctx.params.id);
  
  try {
    const loan = await loanService.getMyLoanById(userId, loanId);
    ctx.body = { data: loan };
  } catch (error: any) {
    if (error.message === 'LOAN_NOT_FOUND') {
      ctx.status = 404;
      ctx.body = { message: '借阅记录不存在' };
      return;
    }
    throw error;
  }
};

// ============ 管理员接口 ============

/**
 * 获取所有借阅记录（管理员）
 * GET /api/loans
 */
export const getAllLoans = async (ctx: Context) => {
  const { status, page, limit } = ctx.query;
  
  const result = await loanService.getAllLoans({
    status: status as LoanStatus | undefined,
    page: page ? parseInt(page as string) : undefined,
    limit: limit ? parseInt(limit as string) : undefined,
  });
  
  ctx.body = {
    data: result.loans,
    pagination: {
      total: result.total,
      page: result.page,
      limit: result.limit,
    },
  };
};

/**
 * 获取待审核列表（管理员）
 * GET /api/loans/pending
 */
export const getPendingLoans = async (ctx: Context) => {
  const loans = await loanService.getPendingLoans();
  ctx.body = { data: loans };
};

/**
 * 获取借阅详情（管理员）
 * GET /api/loans/:id
 */
export const getLoanById = async (ctx: Context) => {
  const loanId = parseInt(ctx.params.id);
  
  try {
    const loan = await loanService.getLoanById(loanId);
    ctx.body = { data: loan };
  } catch (error: any) {
    if (error.message === 'LOAN_NOT_FOUND') {
      ctx.status = 404;
      ctx.body = { message: '借阅记录不存在' };
      return;
    }
    throw error;
  }
};

/**
 * 批准借阅（管理员）
 * PUT /api/loans/:id/approve
 */
export const approveLoan = async (ctx: Context) => {
  const loanId = parseInt(ctx.params.id);
  const { borrowDays } = ctx.request.body as { borrowDays?: number };
  
  try {
    const loan = await loanService.approveLoan(loanId, borrowDays);
    ctx.body = {
      message: '借阅已批准',
      data: loan,
    };
  } catch (error: any) {
    const errorMap: Record<string, { status: number; message: string }> = {
      LOAN_NOT_FOUND: { status: 404, message: '借阅记录不存在' },
      INVALID_STATUS: { status: 400, message: '当前状态不可审核' },
    };
    
    const err = errorMap[error.message] || { status: 500, message: '操作失败' };
    ctx.status = err.status;
    ctx.body = { message: err.message };
  }
};

/**
 * 拒绝借阅（管理员）
 * PUT /api/loans/:id/reject
 */
export const rejectLoan = async (ctx: Context) => {
  const loanId = parseInt(ctx.params.id);
  const { reason } = ctx.request.body as { reason: string };
  
  if (!reason) {
    ctx.status = 400;
    ctx.body = { message: '请提供拒绝理由' };
    return;
  }
  
  try {
    const loan = await loanService.rejectLoan(loanId, reason);
    ctx.body = {
      message: '借阅已拒绝',
      data: loan,
    };
  } catch (error: any) {
    const errorMap: Record<string, { status: number; message: string }> = {
      LOAN_NOT_FOUND: { status: 404, message: '借阅记录不存在' },
      INVALID_STATUS: { status: 400, message: '当前状态不可审核' },
    };
    
    const err = errorMap[error.message] || { status: 500, message: '操作失败' };
    ctx.status = err.status;
    ctx.body = { message: err.message };
  }
};

/**
 * 确认归还（管理员）
 * PUT /api/loans/:id/return
 */
export const returnLoan = async (ctx: Context) => {
  const loanId = parseInt(ctx.params.id);
  
  try {
    const loan = await loanService.returnLoan(loanId);
    ctx.body = {
      message: '已确认归还',
      data: loan,
    };
  } catch (error: any) {
    const errorMap: Record<string, { status: number; message: string }> = {
      LOAN_NOT_FOUND: { status: 404, message: '借阅记录不存在' },
      INVALID_STATUS: { status: 400, message: '当前状态不可归还' },
    };
    
    const err = errorMap[error.message] || { status: 500, message: '操作失败' };
    ctx.status = err.status;
    ctx.body = { message: err.message };
  }
};
