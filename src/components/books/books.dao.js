import { prisma } from '../../config/prismaClient';

class BooksDAO {
  create(data) {
    return prisma.book.create({ data });
  }

  findAll() {
    return prisma.book.findMany();
  }

  findOne(id) {
    return prisma.book.findUnique({
      where: {
        id,
      },
    });
  }

  update(id, updatedData) {
    return prisma.book.update({
      where: { id },
      data: updatedData,
    });
  }

  getBooksByAuthor(authorId) {
    return prisma.book.findMany({
      where: { authorId },
    });
  }
}

export const authorDAO = new BooksDAO();
