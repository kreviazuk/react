import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import dotenv from 'dotenv';

import router from './routes';

dotenv.config();

const app = new Koa();
// const router = new Router(); // Logic moved to routes/index.ts
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
    origin: (ctx) => {
        const origin = ctx.request.header.origin;
        if (!origin || origin.includes('localhost') || origin.startsWith('http://192.168.')) {
            return origin || '*';
        }
        return 'http://localhost:3000';
    },
    credentials: true,
}));
app.use(bodyParser());

// Root (optional)
app.use(async (ctx, next) => {
    if (ctx.path === '/') {
        ctx.body = { message: 'Welcome to My AI App API' };
    } else {
        await next();
    }
});

// Register All Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
