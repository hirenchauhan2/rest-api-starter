import { Prisma } from '@prisma/client';
import authorsService from './authors.service';

class AuthorsController {
  async getAuthors(req, res, next) {
    try {
      const authors = await authorsService.findAll();
      return res.status(200).json(authors);
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }

  async createAuthor(req, res, next) {
    try {
      const createdAuthor = await authorsService.create(req.body);
      return res.status(201).json(createdAuthor);
    } catch (error) {
      // Prisma client errors
      // read more about errors https://www.prisma.io/docs/reference/api-reference/error-reference
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === 'P2002') {
          return res.status(400).json({
            error: true,
            message: 'Author already exists with the same email.',
          });
        }
      }
      return next(error);
    }
  }

  async getAuthor(req, res, next) {
    try {
      const authorId = parseInt(req.params.authorId, 10);
      const author = await authorsService.findOne(authorId);

      return res.status(200).json(author);
    } catch (error) {
      console.error(error.message);
      return next(error);
    }
  }
}

export default new AuthorsController();
