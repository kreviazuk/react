import Router from '@koa/router';
import authRoutes from './auth';
import userRoutes from './user';
import bookRoutes from './bookRoutes';

const router = new Router({ prefix: '/api' });


// Mount Routes
router.use(authRoutes.routes(), authRoutes.allowedMethods());
router.use(userRoutes.routes(), userRoutes.allowedMethods());
router.use(bookRoutes.routes(), bookRoutes.allowedMethods());

export default router;
