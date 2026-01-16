"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category?: { name: string };
  copies: { id: number; status: string }[];
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

export function useCreateBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newBook: { title: string; author: string; isbn: string }) => {
      await api.post("/books", newBook);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
}
