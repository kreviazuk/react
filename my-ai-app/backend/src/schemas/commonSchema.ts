import { z } from 'zod';

export const idParamSchema = z.object({
    id: z.coerce.number().int().positive({ message: "Invalid ID" }),
});

// For routes where the param might be named something else e.g. :bookId
export const bookIdParamSchema = z.object({
    bookId: z.coerce.number().int().positive({ message: "Invalid Book ID" }),
});

export const paginationSchema = z.object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(100).default(20),
});
