import { Context } from 'koa';
import * as userService from '../services/userService';
import { AuthState } from '../middleware/auth';

export const getProfile = async (ctx: Context) => {
  const { userId } = (ctx.state as AuthState).user;

  try {
    const user = await userService.getUserProfile(userId);

    if (!user) {
        ctx.status = 404;
        ctx.body = { message: '用户不存在' };
        return;
    }

    ctx.body = user;
  } catch (error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = { message: '服务器内部错误' };
  }
};
