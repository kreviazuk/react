import { Context } from 'koa';
import * as reviewService from '../services/reviewService';

export const create = async (ctx: Context) => {
    const userId = ctx.state.user.userId;
    const { bookId } = ctx.params;
    const { rating, content } = ctx.request.body as any;

    if (!rating || rating < 1 || rating > 5) {
        ctx.status = 400;
        ctx.body = { error: "Rating must be between 1 and 5" };
        return;
    }

    try {
        const review = await reviewService.createReview(userId, Number(bookId), rating, content);
        ctx.body = { success: true, data: review };
    } catch (error: any) {
        ctx.status = 400;
        ctx.body = { error: error.message };
    }
};

export const list = async (ctx: Context) => {
    const { bookId } = ctx.params;
    const reviews = await reviewService.getBookReviews(Number(bookId));
    const stats = await reviewService.getBookRatingStats(Number(bookId));
    ctx.body = { success: true, data: reviews, stats };
};

export const adminList = async (ctx: Context) => {
    const reviews = await reviewService.getAllReviews();
    ctx.body = { success: true, data: reviews };
};

export const remove = async (ctx: Context) => {
    const userId = ctx.state.user.userId;
    const isAdmin = ctx.state.user.role === 'ADMIN';
    const { id } = ctx.params;

    try {
        await reviewService.deleteReview(Number(id), userId, isAdmin);
        ctx.body = { success: true };
    } catch (error: any) {
        ctx.status = 403;
        ctx.body = { error: error.message };
    }
};
