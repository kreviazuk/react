import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string().email('邮箱格式不正确'),
    password: z.string().min(6, '密码至少需要6位'),
    name: z.string().min(1, '名字不能为空').optional(),
});

export const loginSchema = z.object({
    email: z.string().email('邮箱格式不正确'),
    password: z.string().min(1, '密码不能为空'),
});
