import { Context } from 'koa';
import * as categoryService from '../services/categoryService';

export const getCategories = async (ctx: Context) => {
  try {
    const categories = await categoryService.getAllCategories();
    ctx.body = { success: true, data: categories };
  } catch (error) {
    console.error("getCategories Error:", error);
    ctx.status = 500;
    ctx.body = { success: false, error: 'Internal Server Error' };
  }
};
