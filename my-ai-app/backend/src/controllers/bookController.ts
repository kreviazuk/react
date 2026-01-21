import { Context } from 'koa';
import { z } from 'zod';
import * as bookService from '../services/bookService';

// --- Zod Schemas ---

// 用于验证创建书籍的请求体
const createBookSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  isbn: z.string().min(1, { message: "ISBN is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  description: z.string().optional(),
  publisher: z.string().optional(),
  // z.coerce.date() 会尝试把字符串(如 "2023-01-01")转为 Date 对象
  publishDate: z.coerce.date().optional(),
  coverImage: z.string().optional(),
  categoryId: z.number().int().optional(),
  isAvailable: z.boolean().optional(),
  isBorrowed: z.boolean().optional(),
  inventoryCount: z.coerce.number().int().nonnegative().optional(),
});

// 用于验证路径参数中的 ID
const getBookIdSchema = z.object({
  id: z.coerce.number().int().positive({ message: "Invalid ID format" }),
});

// --- Controllers ---

export const getBooks = async (ctx: Context) => {
  try {
    const books = await bookService.getAllBooks();
    ctx.body = { success: true, data: books };
  } catch (error) {
    console.error("getBooks Error:", error);
    ctx.status = 500;
    ctx.body = { success: false, error: 'Internal Server Error' };
  }
};

export const getBook = async (ctx: Context) => {
  try {
    // 1. 使用 Zod 验证并转换 params.id
    const result = getBookIdSchema.safeParse(ctx.params);
    
    if (!result.success) {
      ctx.status = 400; // Bad Request
      // Force cast result.error to any to avoid TS issues with 'errors' property
      ctx.body = { success: false, error: (result.error as any).errors[0].message };
      return;
    }

    const { id } = result.data;
    const book = await bookService.getBookById(id);

    if (!book) {
      ctx.status = 404; // Not Found
      ctx.body = { success: false, error: 'Book not found' };
      return;
    }

    ctx.body = { success: true, data: book };
  } catch (error) {
    console.error("getBook Error:", error);
    ctx.status = 500;
    ctx.body = { success: false, error: 'Internal Server Error' };
  }
};

export const createBook = async (ctx: Context) => {
  try {
    // 1. 使用 Zod 验证 request.body
    const bookData = createBookSchema.parse(ctx.request.body);

    // Explicitly casting to avoid any type mismatch with service definition if necessary, 
    // though Zod inference should align if types match.
    // However, Prisma input types are strict. bookData has the correct shape.
    const book = await bookService.createBook(bookData as any);
    
    ctx.status = 201; // Created
    ctx.body = { success: true, data: book };

  } catch (error: any) {
    // 2. 错误分类处理
    console.error("createBook Error:", error);

    // 情况 A: Zod 校验失败
    if (error instanceof z.ZodError) {
      ctx.status = 400;
      const errorMessages = (error as any).errors.map((e: any) => `${e.path.join('.')}: ${e.message}`).join(', ');
      ctx.body = { 
        success: false, 
        error: "Validation Failed",
        details: errorMessages 
      };
      return;
    }

    // 情况 B: Prisma 唯一性约束冲突 (例如 ISBN 重复)
    // 直接检查 code 属性，避免 import 类型问题
    if (error.code === 'P2002') {
      ctx.status = 409; // Conflict
      const target = (error.meta?.target as string[])?.join(', ') || 'field';
      ctx.body = { success: false, error: `A book with this ${target} already exists` };
      return;
    }

    // 情况 C: 其他内部错误
    // ... (existing error handling)
    ctx.status = 500;
    ctx.body = { success: false, error: 'Internal Server Error' };
  }
};

export const updateBook = async (ctx: Context) => {
  try {
    const { id } = getBookIdSchema.parse(ctx.params);
    const bookData = createBookSchema.partial().parse(ctx.request.body);

    const book = await bookService.updateBook(id, bookData);
    ctx.body = { success: true, data: book };

  } catch (error: any) {
    console.error("updateBook Error:", error);

    if (error instanceof z.ZodError) {
      ctx.status = 400;
      const errorMessages = (error as any).errors.map((e: any) => `${e.path.join('.')}: ${e.message}`).join(', ');
      ctx.body = { success: false, error: "Validation Failed", details: errorMessages };
      return;
    }

    if (error.code === 'P2025') { // Record not found
      ctx.status = 404;
      ctx.body = { success: false, error: 'Book not found' };
      return;
    }

    if (error.code === 'P2002') { // Unique constraint
      ctx.status = 409;
      ctx.body = { success: false, error: 'Conflict: ISBN already exists' };
      return;
    }

    ctx.status = 500;
    ctx.body = { success: false, error: 'Failed to update book' };
  }
};

export const deleteBook = async (ctx: Context) => {
  try {
    const { id } = getBookIdSchema.parse(ctx.params);
    await bookService.deleteBook(id);
    ctx.status = 204; // No Content
  } catch (error: any) {
    console.error("deleteBook Error:", error);
    if (error instanceof z.ZodError) {
        ctx.status = 400;
        ctx.body = { success: false, error: "Invalid ID" };
        return;
    }
    if (error.code === 'P2025') {
       ctx.status = 404;
       ctx.body = { success: false, error: 'Book not found' };
       return;
    }
    if (error.code === 'P2003') { // Foreign key constraint (e.g. has copies or loans)
        ctx.status = 409;
        ctx.body = { success: false, error: 'Cannot delete book with existing copies or history' };
        return;
    }
    ctx.status = 500;
    ctx.body = { success: false, error: 'Failed to delete book' };
  }
};
