import Router from '@koa/router';
import authRoutes from './auth';
import userRoutes from './user';
import bookRoutes from './bookRoutes';
import uploadRoutes from './upload';

import categoryRoutes from './categoryRoutes';

const router = new Router({ prefix: '/api' });


// Mount Routes
router.use(authRoutes.routes(), authRoutes.allowedMethods());
router.use(userRoutes.routes(), userRoutes.allowedMethods());
router.use(bookRoutes.routes(), bookRoutes.allowedMethods());
router.use(uploadRoutes.routes(), uploadRoutes.allowedMethods());
router.use(categoryRoutes.routes(), categoryRoutes.allowedMethods());

export default router;
