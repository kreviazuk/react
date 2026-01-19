"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/api/client";

export type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  coverImage?: string;
  description?: string;
};

export function useBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await api.get("/books");
      return data.data as Book[];
    },
  });
}

export function useBook(id: string) {
  return useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const { data } = await api.get(`/books/${id}`);
      return data.data as Book;
    },
    enabled: !!id,
  });
}
