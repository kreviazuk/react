
import Router from '@koa/router';
import * as favoriteController from '../controllers/favoriteController';
import { authMiddleware } from '../middleware/auth';

import { requireAdmin } from '../middleware/role';

const router = new Router();

// Require login for all favorite actions
router.use(authMiddleware);

router.get('/admin/favorites', requireAdmin, favoriteController.getAll);
router.get('/favorites', favoriteController.getFavorites);
router.post('/favorites/:id', favoriteController.toggleFavorite);
router.get('/favorites/:id', favoriteController.checkStatus);

export default router;
