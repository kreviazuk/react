import { Context } from 'koa';
import * as reviewService from '../services/reviewService';
import { createReviewSchema } from '../schemas/reviewSchema';
import { idParamSchema, bookIdParamSchema } from '../schemas/commonSchema';

export const create = async (ctx: Context) => {
    const userId = ctx.state.user.userId;

    // Validate bookId in params
    const paramValidation = bookIdParamSchema.safeParse(ctx.params);
    if (!paramValidation.success) {
        ctx.status = 400;
        ctx.body = { error: "Invalid Book ID" };
        return;
    }
    const { bookId } = paramValidation.data;

    // Validate body
    const bodyValidation = createReviewSchema.safeParse(ctx.request.body);
    if (!bodyValidation.success) {
        ctx.status = 400;
        ctx.body = {
            error: "Validation Failed",
            details: bodyValidation.error.flatten().fieldErrors
        };
        return;
    }
    const { rating, content } = bodyValidation.data;

    try {
        const review = await reviewService.createReview(userId, bookId, rating, content);
        ctx.body = { success: true, data: review };
    } catch (error: any) {
        ctx.status = 400;
        ctx.body = { error: error.message };
    }
};

export const list = async (ctx: Context) => {
    const paramValidation = bookIdParamSchema.safeParse(ctx.params);
    if (!paramValidation.success) {
        ctx.status = 400;
        ctx.body = { error: "Invalid Book ID" };
        return;
    }
    const { bookId } = paramValidation.data;

    const reviews = await reviewService.getBookReviews(bookId);
    const stats = await reviewService.getBookRatingStats(bookId);
    ctx.body = { success: true, data: reviews, stats };
};

export const adminList = async (ctx: Context) => {
    const reviews = await reviewService.getAllReviews();
    ctx.body = { success: true, data: reviews };
};

export const remove = async (ctx: Context) => {
    const userId = ctx.state.user.userId;
    const isAdmin = ctx.state.user.role === 'ADMIN';

    const validation = idParamSchema.safeParse(ctx.params);
    if (!validation.success) {
        ctx.status = 400;
        ctx.body = { error: "Invalid ID" };
        return;
    }
    const { id } = validation.data;

    try {
        await reviewService.deleteReview(id, userId, isAdmin);
        ctx.body = { success: true };
    } catch (error: any) {
        ctx.status = 403;
        ctx.body = { error: error.message };
    }
};
