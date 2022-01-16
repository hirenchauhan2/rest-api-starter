import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  rejectOnNotFound: {
    findUnique: true,
  },
});
