import Router from '@koa/router';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';

const router = new Router();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication
 */

interface RegisterBody {
  email?: string;
  password?: string;
  name?: string;
}

interface LoginBody {
  email?: string;
  password?: string;
}

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Email already registered or missing fields
 */
router.post('/register', async (ctx) => {
  const { email, password, name } = ctx.request.body as RegisterBody;

  if (!email || !password) {
    ctx.status = 400;
    ctx.body = { message: '邮箱和密码不能为空' };
    return;
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      ctx.status = 400;
      ctx.body = { message: '该邮箱已被注册' };
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    ctx.body = { 
        id: user.id, 
        email: user.email, 
        name: user.name,
        createdAt: user.createdAt 
    };
  } catch (error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = { message: 'Internal server error' };
  }
});

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *                 token_type:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', async (ctx) => {
  const { email, password } = ctx.request.body as LoginBody;

  if (!email || !password) {
    ctx.status = 400;
    ctx.body = { message: '邮箱和密码不能为空' };
    return;
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      ctx.status = 401;
      ctx.body = { message: '账号或密码错误' };
      return;
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    ctx.body = { access_token: token, token_type: 'bearer' };
  } catch (error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = { message: '服务器内部错误' };
  }
});

export default router;
