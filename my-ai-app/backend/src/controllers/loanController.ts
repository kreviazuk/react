import { Context } from 'koa';
import * as loanService from '../services/loanService';
import {
  applyLoanSchema,
  getMyLoansQuerySchema,
  getAllLoansQuerySchema,
  approveLoanSchema,
  rejectLoanSchema
} from '../schemas/loanSchema';
import { idParamSchema } from '../schemas/commonSchema';

// ============ 用户接口 ============

/**
 * 申请借阅
 * POST /api/loans/apply
 */
export const applyLoan = async (ctx: Context) => {
  const validation = applyLoanSchema.safeParse(ctx.request.body);

  if (!validation.success) {
    ctx.status = 400;
    ctx.body = {
      message: '参数错误',
      errors: validation.error.flatten().fieldErrors
    };
    return;
  }

  const userId = ctx.state.user.userId;
  const { copyId } = validation.data;

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
  const validation = getMyLoansQuerySchema.safeParse(ctx.query);

  if (!validation.success) {
    ctx.status = 400;
    ctx.body = { message: 'Invalid query parameters' };
    return;
  }

  const userId = ctx.state.user.userId;
  const { status } = validation.data;

  const loans = await loanService.getMyLoans(userId, status);

  ctx.body = { data: loans };
};

/**
 * 获取借阅详情
 * GET /api/loans/my/:id
 */
export const getMyLoanById = async (ctx: Context) => {
  const validation = idParamSchema.safeParse(ctx.params);

  if (!validation.success) {
    ctx.status = 400;
    ctx.body = { message: 'Invalid ID' };
    return;
  }

  const userId = ctx.state.user.userId;
  const { id } = validation.data;

  try {
    const loan = await loanService.getMyLoanById(userId, id);
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
  const validation = getAllLoansQuerySchema.safeParse(ctx.query);

  if (!validation.success) {
    ctx.status = 400;
    ctx.body = { message: 'Invalid query parameters' };
    return;
  }

  const { status, page, limit } = validation.data;

  const result = await loanService.getAllLoans({
    status,
    page,
    limit,
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
  const validation = idParamSchema.safeParse(ctx.params);

  if (!validation.success) {
    ctx.status = 400;
    ctx.body = { message: 'Invalid ID' };
    return;
  }

  const { id } = validation.data;

  try {
    const loan = await loanService.getLoanById(id);
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
  const paramValidation = idParamSchema.safeParse(ctx.params);
  if (!paramValidation.success) {
    ctx.status = 400;
    ctx.body = { message: 'Invalid ID' };
    return;
  }

  const bodyValidation = approveLoanSchema.safeParse(ctx.request.body);
  if (!bodyValidation.success) {
    ctx.status = 400;
    ctx.body = { message: 'Invalid parameters', errors: bodyValidation.error.flatten().fieldErrors };
    return;
  }

  const { id } = paramValidation.data;
  const { borrowDays } = bodyValidation.data;

  try {
    const loan = await loanService.approveLoan(id, borrowDays);
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
  const paramValidation = idParamSchema.safeParse(ctx.params);
  if (!paramValidation.success) {
    ctx.status = 400;
    ctx.body = { message: 'Invalid ID' };
    return;
  }

  const bodyValidation = rejectLoanSchema.safeParse(ctx.request.body);
  if (!bodyValidation.success) {
    ctx.status = 400;
    ctx.body = { message: '拒绝理由必填', errors: bodyValidation.error.flatten().fieldErrors };
    return;
  }

  const { id } = paramValidation.data;
  const { reason } = bodyValidation.data;

  try {
    const loan = await loanService.rejectLoan(id, reason);
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
  const validation = idParamSchema.safeParse(ctx.params);
  if (!validation.success) {
    ctx.status = 400;
    ctx.body = { message: 'Invalid ID' };
    return;
  }

  const { id } = validation.data;

  try {
    const loan = await loanService.returnLoan(id);
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
