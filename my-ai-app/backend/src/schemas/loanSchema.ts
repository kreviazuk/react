import { z } from 'zod';
import { LoanStatus } from '@prisma/client';

export const applyLoanSchema = z.object({
    copyId: z.number().int().positive(),
});

export const getMyLoansQuerySchema = z.object({
    status: z.nativeEnum(LoanStatus).optional(),
});

export const getAllLoansQuerySchema = z.object({
    status: z.nativeEnum(LoanStatus).optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().optional().default(20),
});

export const approveLoanSchema = z.object({
    borrowDays: z.number().int().positive().optional().default(30),
});

export const rejectLoanSchema = z.object({
    reason: z.string().min(1, '拒绝理由不能为空'),
});
