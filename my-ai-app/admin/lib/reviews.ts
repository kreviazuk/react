import api from "./api";

export interface Review {
    id: number;
    userId: number;
    bookId: number;
    rating: number;
    content: string;
    createdAt: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
    book: {
        id: number;
        title: string;
        coverImage: string;
    };
}

export const reviewsApi = {
    getAll: () => api.get('/admin/reviews'),
    delete: (id: number) => api.delete(`/reviews/${id}`),
};
