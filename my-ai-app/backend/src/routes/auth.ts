import Router from '@koa/router';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';

const router = new Router();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

interface RegisterBody {
  email?: string;
  password?: string;
  name?: string;
}

interface LoginBody {
  email?: string;
  password?: string;
}

router.post('/register', async (ctx) => {
  const { email, password, name } = ctx.request.body as RegisterBody;

  if (!email || !password) {
    ctx.status = 400;
    ctx.body = { message: 'Email and password are required' };
    return;
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      ctx.status = 400;
      ctx.body = { message: 'Email already registered' };
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

router.post('/login', async (ctx) => {
  const { email, password } = ctx.request.body as LoginBody;

  if (!email || !password) {
    ctx.status = 400;
    ctx.body = { message: 'Email and password are required' };
    return;
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      ctx.status = 401;
      ctx.body = { message: 'Invalid credentials' };
      return;
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    ctx.body = { access_token: token, token_type: 'bearer' };
  } catch (error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = { message: 'Internal server error' };
  }
});

export default router;
