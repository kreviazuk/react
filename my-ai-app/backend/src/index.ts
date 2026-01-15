import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import dotenv from 'dotenv';

import { koaSwagger } from 'koa2-swagger-ui';
import { swaggerSpec } from './config/swagger';
import router from './routes';

dotenv.config();

const app = new Koa();
const PORT = process.env.PORT || 8000;

app.use(koaSwagger({
    routePrefix: '/docs', 
    swaggerOptions: { spec: swaggerSpec as Record<string, unknown> },
}));

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
