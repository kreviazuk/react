
import api from "./client";

export const favoritesApi = {
    getFavorites: () => api.get("/favorites"),
    toggleFavorite: (bookId: number) => api.post(`/favorites/${bookId}`),
    checkStatus: (bookId: number) => api.get(`/favorites/${bookId}`),
};
