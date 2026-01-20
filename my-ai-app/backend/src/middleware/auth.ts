import { Context, Next } from 'koa';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export interface AuthState {
  user: {
    userId: number;
    role: string;
  };
}

export const authMiddleware = async (ctx: Context, next: Next) => {
  const authHeader = ctx.header.authorization;

  if (!authHeader) {
    ctx.status = 401;
    ctx.body = { message: '未提供认证令牌' };
    return;
  }

  const token = authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    ctx.status = 401;
    ctx.body = { message: '令牌格式错误' };
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; role: string };
    ctx.state.user = decoded; // Mount user info to context state
    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = { message: '令牌无效或已过期' };
  }
};
