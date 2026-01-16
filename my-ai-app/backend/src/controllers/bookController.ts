import { Context } from 'koa';
import * as bookService from '../services/bookService';

export const getBooks = async (ctx: Context) => {
  try {
    const books = await bookService.getAllBooks();
    ctx.body = { success: true, data: books };
  } catch (error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = { success: false, error: 'Failed to fetch books' };
  }
};

export const getBook = async (ctx: Context) => {
  try {
    const id = parseInt(ctx.params.id);
    const book = await bookService.getBookById(id);
    if (!book) {
      ctx.status = 404;
      ctx.body = { success: false, error: 'Book not found' };
      return;
    }
    ctx.body = { success: true, data: book };
  } catch (error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = { success: false, error: 'Failed to fetch book' };
  }
};

export const createBook = async (ctx: Context) => {
  try {
    const data = ctx.request.body as any;
    // In a real app, validate 'data' using Zod here
    const book = await bookService.createBook(data);
    ctx.status = 201;
    ctx.body = { success: true, data: book };
  } catch (error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = { success: false, error: 'Failed to create book' };
  }
};
