
import api from "./api";

export interface Favorite {
    id: number;
    user: {
        id: number;
        name: string | null;
        email: string;
    };
    book: {
        id: number;
        title: string;
        coverImage: string | null;
    };
    createdAt: string;
}

export const adminFavoritesApi = {
    getAll: () => api.get("/admin/favorites"),
};
