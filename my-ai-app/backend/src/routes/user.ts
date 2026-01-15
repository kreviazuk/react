import Router from '@koa/router';
import prisma from '../lib/prisma';
import { authMiddleware, AuthState } from '../middleware/auth';

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
router.get('/me', async (ctx) => {
  const { userId } = (ctx.state as AuthState).user;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    if (!user) {
        ctx.status = 404;
        ctx.body = { message: '用户不存在' };
        return;
    }

    ctx.body = user;
  } catch (error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = { message: '服务器内部错误' };
  }
});

export default router;
