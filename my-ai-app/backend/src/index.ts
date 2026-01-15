import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import { PrismaClient as PrismaClientConfig } from '@prisma/client/extension'; // Removed for v5

dotenv.config();

const app = new Koa();
const router = new Router();
const prisma = new PrismaClient(); // Standard init for v5

const PORT = process.env.PORT || 8000;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Types
interface RegisterBody {
  email?: string;
  password?: string;
  name?: string;
}

interface LoginBody {
  email?: string;
  password?: string;
}

// Middleware
app.use(cors({
    origin: (ctx) => {
        const origin = ctx.request.header.origin;
        // Allow localhost and local network IP
        if (!origin || origin.includes('localhost') || origin.startsWith('http://192.168.')) {
            return origin || '*';
        }
        return 'http://localhost:3000'; // fallback
    },
    credentials: true,
}));
app.use(bodyParser());

// Routes
router.get('/', (ctx) => {
  ctx.body = { message: 'Welcome to My AI App API (Node.js)' };
});

router.get('/api/health', (ctx) => {
  ctx.body = { status: 'healthy', backend: 'koa' };
});

router.post('/api/register', async (ctx) => {
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

router.post('/api/login', async (ctx) => {
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

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
