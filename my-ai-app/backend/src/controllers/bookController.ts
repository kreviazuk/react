import { Context } from 'koa';
import * as bookService from '../services/bookService';
import { createBookSchema, updateBookSchema } from '../schemas/bookSchema';
import { idParamSchema } from '../schemas/commonSchema';

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
    const result = idParamSchema.safeParse(ctx.params);

    if (!result.success) {
      ctx.status = 400;
      ctx.body = { success: false, error: "Invalid ID format" };
      return;
    }

    const { id } = result.data;
    const book = await bookService.getBookById(id);

    if (!book) {
      ctx.status = 404;
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
  const validation = createBookSchema.safeParse(ctx.request.body);

  if (!validation.success) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      error: "Validation Failed",
      details: validation.error.flatten().fieldErrors
    };
    return;
  }

  try {
    const book = await bookService.createBook(validation.data as any);

    ctx.status = 201;
    ctx.body = { success: true, data: book };

  } catch (error: any) {
    console.error("createBook Error:", error);

    if (error.code === 'P2002') {
      ctx.status = 409;
      const target = (error.meta?.target as string[])?.join(', ') || 'field';
      ctx.body = { success: false, error: `A book with this ${target} already exists` };
      return;
    }

    ctx.status = 500;
    ctx.body = { success: false, error: 'Internal Server Error' };
  }
};

export const updateBook = async (ctx: Context) => {
  const paramValidation = idParamSchema.safeParse(ctx.params);
  if (!paramValidation.success) {
    ctx.status = 400;
    ctx.body = { success: false, error: "Invalid ID" };
    return;
  }

  const bodyValidation = updateBookSchema.safeParse(ctx.request.body);
  if (!bodyValidation.success) {
    ctx.status = 400;
    ctx.body = { success: false, error: "Validation Failed", details: bodyValidation.error.flatten().fieldErrors };
    return;
  }

  const { id } = paramValidation.data;

  try {
    const book = await bookService.updateBook(id, bodyValidation.data);
    ctx.body = { success: true, data: book };

  } catch (error: any) {
    console.error("updateBook Error:", error);

    if (error.code === 'P2025') {
      ctx.status = 404;
      ctx.body = { success: false, error: 'Book not found' };
      return;
    }

    if (error.code === 'P2002') {
      ctx.status = 409;
      ctx.body = { success: false, error: 'Conflict: ISBN already exists' };
      return;
    }

    ctx.status = 500;
    ctx.body = { success: false, error: 'Failed to update book' };
  }
};

export const deleteBook = async (ctx: Context) => {
  const validation = idParamSchema.safeParse(ctx.params);
  if (!validation.success) {
    ctx.status = 400;
    ctx.body = { success: false, error: "Invalid ID" };
    return;
  }

  const { id } = validation.data;

  try {
    await bookService.deleteBook(id);
    ctx.status = 204;
  } catch (error: any) {
    console.error("deleteBook Error:", error);
    if (error.code === 'P2025') {
      ctx.status = 404;
      ctx.body = { success: false, error: 'Book not found' };
      return;
    }
    if (error.code === 'P2003') {
      ctx.status = 409;
      ctx.body = { success: false, error: 'Cannot delete book with existing copies or history' };
      return;
    }
    ctx.status = 500;
    ctx.body = { success: false, error: 'Failed to delete book' };
  }
};
