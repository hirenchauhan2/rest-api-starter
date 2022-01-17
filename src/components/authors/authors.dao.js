import { prisma } from '../../config/prismaClient';

class AuthorDAO {
  create(data) {
    return prisma.author.create({ data });
  }

  findAll() {
    return prisma.author.findMany();
  }

  findOne(id) {
    return prisma.author.findUnique({
      where: {
        id,
      },
    });
  }

  update(id, updatedData) {
    return prisma.author.update({
      where: { id },
      data: updatedData,
    });
  }

  getBooksByAuthor(id) {
    return prisma.author.findUnique({
      where: { id },
      select: {
        books: true,
      },
    });
  }
}

export default new AuthorDAO();
