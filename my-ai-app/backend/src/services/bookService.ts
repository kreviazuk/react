import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllBooks = async () => {
  return await prisma.book.findMany({
    include: { category: true, copies: true }
  });
};

export const getBookById = async (id: number) => {
  return await prisma.book.findUnique({
    where: { id },
    include: { category: true, copies: true }
  });
};

export const createBook = async (data: Prisma.BookCreateInput) => {
  return await prisma.book.create({
    data
  });
};

export const updateBook = async (id: number, data: Prisma.BookUpdateInput) => {
  return await prisma.book.update({
    where: { id },
    data
  });
};

export const deleteBook = async (id: number) => {
  return await prisma.book.delete({
    where: { id }
  });
};
