import { z } from 'zod';

export const createBookSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    isbn: z.string().min(1, { message: "ISBN is required" }),
    author: z.string().min(1, { message: "Author is required" }),
    description: z.string().optional(),
    publisher: z.string().optional(),
    publishDate: z.coerce.date().optional(),
    coverImage: z.string().optional(),
    categoryId: z.number().int().optional(),
    isAvailable: z.boolean().optional(),
    isBorrowed: z.boolean().optional(),
    inventoryCount: z.coerce.number().int().nonnegative().optional(),
});

export const updateBookSchema = createBookSchema.partial();
