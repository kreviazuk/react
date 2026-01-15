import Router from '@koa/router';
import authRoutes from './auth';
import userRoutes from './user';

const router = new Router({ prefix: '/api' });

// Health Check
router.get('/health', (ctx) => {
  ctx.body = { status: 'healthy', backend: 'koa' };
});

// Mount Routes
router.use(authRoutes.routes(), authRoutes.allowedMethods());
router.use(userRoutes.routes(), userRoutes.allowedMethods());

export default router;
