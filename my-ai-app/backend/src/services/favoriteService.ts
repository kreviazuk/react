
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addFavorite = async (userId: number, bookId: number) => {
    // Check if exists to avoid error, or use try/catch with unique constraint
    const exists = await prisma.favorite.findFirst({
        where: { userId, bookId }
    });
    if (exists) return exists;

    return await prisma.favorite.create({
        data: { userId, bookId }
    });
};

export const removeFavorite = async (userId: number, bookId: number) => {
    return await prisma.favorite.deleteMany({
        where: { userId, bookId }
    });
};

export const getFavorites = async (userId: number) => {
    const favorites = await prisma.favorite.findMany({
        where: { userId },
        include: { 
            book: {
                include: {
                    category: true
                }
            } 
        },
        orderBy: { createdAt: 'desc' }
    });
    return favorites.map(f => f.book); // Return list of books directly
};

export const checkFavorite = async (userId: number, bookId: number) => {
    const count = await prisma.favorite.count({
        where: { userId, bookId }
    });
    return count > 0;
};

export const getAllFavorites = async () => {
    return await prisma.favorite.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            },
            book: {
                select: {
                    id: true,
                    title: true,
                    coverImage: true
                }
            }
        },
        orderBy: { createdAt: 'desc' }
    });
};
