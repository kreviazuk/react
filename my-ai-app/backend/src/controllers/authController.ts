import { Context } from 'koa';
import * as authService from '../services/authService';

export const register = async (ctx: Context) => {
  const { email, password, name } = ctx.request.body as any;

  if (!email || !password) {
    ctx.status = 400;
    ctx.body = { message: '邮箱和密码不能为空' };
    return;
  }

  try {
    const user = await authService.register({ email, password, name });
    ctx.body = user;
  } catch (error: any) {
    if (error.message === 'EMAIL_EXISTS') {
      ctx.status = 400;
      ctx.body = { message: '该邮箱已被注册' };
    } else {
      console.error(error);
      ctx.status = 500;
      ctx.body = { message: 'Internal server error' };
    }
  }
};

export const login = async (ctx: Context) => {
  const { email, password } = ctx.request.body as any;

  if (!email || !password) {
    ctx.status = 400;
    ctx.body = { message: '邮箱和密码不能为空' };
    return;
  }

  try {
    const result = await authService.login({ email, password });
    ctx.body = result;
  } catch (error: any) {
    if (error.message === 'INVALID_CREDENTIALS') {
      ctx.status = 401;
      ctx.body = { message: '账号或密码错误' };
    } else {
      console.error(error);
      ctx.status = 500;
      ctx.body = { message: '服务器内部错误' };
    }
  }
};
