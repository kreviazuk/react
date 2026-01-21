import api from "./client";

export interface Review {
    id: number;
    userId: number;
    bookId: number;
    rating: number;
    content?: string;
    createdAt: string;
    user: {
        id: number;
        name: string | null;
    };
}

export const reviewsApi = {
    getReviews: (bookId: number) => api.get(`/books/${bookId}/reviews`),
    createReview: (bookId: number, data: { rating: number; content?: string }) => api.post(`/books/${bookId}/reviews`, data),
    deleteReview: (id: number) => api.delete(`/reviews/${id}`),
};
