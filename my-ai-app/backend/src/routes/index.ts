import Router from '@koa/router';
import authRoutes from './auth';

const router = new Router({ prefix: '/api' });
// Mount Auth Routes (at root of /api, so /api/login)
router.use(authRoutes.routes(), authRoutes.allowedMethods());

export default router;
