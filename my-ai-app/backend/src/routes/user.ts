import Router from '@koa/router';
import { authMiddleware } from '../middleware/auth';
import * as userController from '../controllers/userController';

const router = new Router();

// Apply auth middleware to all routes in this file
router.use(authMiddleware); 

/**
 * @swagger
 * /api/me:
 *   get:
 *     summary: Get current user info
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 email:
 *                   type: string
 *                 name:
 *                   type: string
 *       401:
 *         description: Unauthorized
 */
router.get('/me', userController.getProfile);

export default router;
