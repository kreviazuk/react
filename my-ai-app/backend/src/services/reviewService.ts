import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createReview = async (userId: number, bookId: number, rating: number, content?: string) => {
    // Check if review exists (unique constraint handles this too, but explicit check is nicer for error msg)
    const exists = await prisma.review.findUnique({
        where: { userId_bookId: { userId, bookId } }
    });
    if (exists) throw new Error("You have already reviewed this book.");

    return await prisma.review.create({
        data: { userId, bookId, rating, content }
    });
};

export const getBookReviews = async (bookId: number) => {
    return await prisma.review.findMany({
        where: { bookId },
        include: {
            user: { select: { id: true, name: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
};

export const getAllReviews = async () => {
    return await prisma.review.findMany({
        include: {
            user: { select: { id: true, name: true, email: true } },
            book: { select: { id: true, title: true, coverImage: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
};

export const getBookRatingStats = async (bookId: number) => {
    const agg = await prisma.review.aggregate({
        where: { bookId },
        _avg: { rating: true },
        _count: true
    });
    return {
        average: agg._avg.rating || 0,
        count: agg._count
    };
};

export const deleteReview = async (id: number, userId: number, isAdmin: boolean) => {
    const review = await prisma.review.findUnique({ where: { id } });
    if (!review) throw new Error("Review not found");

    if (!isAdmin && review.userId !== userId) {
        throw new Error("Unauthorized");
    }

    return await prisma.review.delete({ where: { id } });
};
