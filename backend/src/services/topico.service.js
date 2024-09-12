import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createTopico = async (nome, icone) => {
  return await prisma.topico.create({
    data: {
      nome,
      icone,
    },
  });
};

const getAllTopicos = async () => {
  return await prisma.topico.findMany();
};

export { createTopico, getAllTopicos };
