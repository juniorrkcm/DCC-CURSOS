import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createCategoria = async (nome, icone) => {
  return await prisma.categoria.create({
    data: { nome, icone },
  });
};

const getAllCategorias = async () => {
  return await prisma.categoria.findMany({
    include: { cursos: true },
  });
};

export { createCategoria, getAllCategorias };