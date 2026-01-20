import { Context, Next } from 'koa';

/**
 * 角色权限中间件工厂函数
 * 使用方式: router.get('/admin-only', authMiddleware, requireRole('ADMIN'), handler)
 * 
 * @param allowedRoles - 允许访问的角色列表
 */
export const requireRole = (...allowedRoles: string[]) => {
  return async (ctx: Context, next: Next) => {
    const userRole = ctx.state.user?.role;

    // 检查是否已登录
    if (!userRole) {
      ctx.status = 401;
      ctx.body = { message: '未登录或登录已过期' };
      return;
    }

    // 检查角色权限
    if (!allowedRoles.includes(userRole)) {
      ctx.status = 403;
      ctx.body = { 
        message: '权限不足',
        requiredRoles: allowedRoles,
        currentRole: userRole,
      };
      return;
    }

    await next();
  };
};

/**
 * 只允许管理员访问（快捷方式）
 * 使用方式: router.get('/admin-only', authMiddleware, requireAdmin, handler)
 */
export const requireAdmin = requireRole('ADMIN');

/**
 * 允许管理员或普通用户访问
 * 使用方式: router.get('/users', authMiddleware, requireUser, handler)
 */
export const requireUser = requireRole('USER', 'ADMIN');
