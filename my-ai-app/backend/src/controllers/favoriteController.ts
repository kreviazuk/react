
import { Context } from 'koa';
import * as favoriteService from '../services/favoriteService';

export const getFavorites = async (ctx: Context) => {
    const userId = ctx.state.user.userId;
    const books = await favoriteService.getFavorites(userId);
    ctx.body = { success: true, data: books };
};

export const toggleFavorite = async (ctx: Context) => {
    const userId = ctx.state.user.userId;
    const bookId = Number(ctx.params.id);
    
    const exists = await favoriteService.checkFavorite(userId, bookId);
    
    if (exists) {
        await favoriteService.removeFavorite(userId, bookId);
        ctx.body = { success: true, isFavorite: false, message: "Removed from favorites" };
    } else {
        await favoriteService.addFavorite(userId, bookId);
        ctx.body = { success: true, isFavorite: true, message: "Added to favorites" };
    }
};

export const checkStatus = async (ctx: Context) => {
     const userId = ctx.state.user.userId;
     const bookId = Number(ctx.params.id);
     const isFavorite = await favoriteService.checkFavorite(userId, bookId);
     ctx.body = { success: true, isFavorite };
}

export const getAll = async (ctx: Context) => {
    const favorites = await favoriteService.getAllFavorites();
    ctx.body = { success: true, data: favorites };
};
