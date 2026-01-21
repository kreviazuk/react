import Router from '@koa/router';
import * as reviewController from '../controllers/reviewController';
import { authMiddleware } from '../middleware/auth';
import { requireAdmin } from '../middleware/role';

const router = new Router();

// Public: Get reviews
router.get('/books/:bookId/reviews', reviewController.list);

// Admin: Get all reviews
router.get('/admin/reviews', authMiddleware, requireAdmin, reviewController.adminList);

// Protected: Add/Delete
router.post('/books/:bookId/reviews', authMiddleware, reviewController.create);
router.delete('/reviews/:id', authMiddleware, reviewController.remove);

export default router;
