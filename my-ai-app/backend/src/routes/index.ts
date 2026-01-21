import Router from '@koa/router';
import authRoutes from './auth';
import userRoutes from './user';
import bookRoutes from './bookRoutes';
import uploadRoutes from './upload';
import categoryRoutes from './categoryRoutes';
import loanRoutes from './loanRoutes';
import favoriteRoutes from './favoriteRoutes';
import reviewRoutes from './reviewRoutes';

const router = new Router({ prefix: '/api' });


// Mount Routes
router.use(authRoutes.routes(), authRoutes.allowedMethods());
router.use(userRoutes.routes(), userRoutes.allowedMethods());
router.use(bookRoutes.routes(), bookRoutes.allowedMethods());
router.use(uploadRoutes.routes(), uploadRoutes.allowedMethods());
router.use(categoryRoutes.routes(), categoryRoutes.allowedMethods());
router.use(loanRoutes.routes(), loanRoutes.allowedMethods());
router.use(favoriteRoutes.routes(), favoriteRoutes.allowedMethods());
router.use(reviewRoutes.routes(), reviewRoutes.allowedMethods());

export default router;
