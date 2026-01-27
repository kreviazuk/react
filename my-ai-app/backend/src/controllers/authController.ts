import { Context } from 'koa';
import * as authService from '../services/authService';
import { registerSchema, loginSchema } from '../schemas/authSchema';

export const register = async (ctx: Context) => {
  const validation = registerSchema.safeParse(ctx.request.body);

  if (!validation.success) {
    ctx.status = 400;
    ctx.body = {
      message: '参数错误',
      errors: validation.error.flatten().fieldErrors
    };
    return;
  }

  const { email, password, name } = validation.data;

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
  const validation = loginSchema.safeParse(ctx.request.body);

  if (!validation.success) {
    ctx.status = 400;
    ctx.body = {
      message: '参数错误',
      errors: validation.error.flatten().fieldErrors
    };
    return;
  }

  const { email, password } = validation.data;

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
