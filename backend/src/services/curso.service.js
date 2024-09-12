import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createCurso = async (titulo, descricao, imagemUrl, categoriaId, topicoIds) => {
  return await prisma.curso.create({
    data: {
      titulo,
      descricao,
      imagemUrl,
      categoria: { connect: { id: categoriaId } },
      topicos: {
        connect: topicoIds.map((id) => ({ id })),
      },
    },
  });
};

const getAllCursos = async () => {
  return await prisma.curso.findMany({
    include: { categoria: true, topicos: true },
  });
};

const getAllCursosByFiltro = async (filtro) => {
  const { categoriaId, topicoId } = filtro;
  console.log(filtro);
  return await prisma.curso.findMany({
    include: { 
      categoria: true, 
      topicos: true 
    },
    where: {
      AND: [
        categoriaId ? { categoriaId: parseInt(categoriaId) } : {},
        topicoId ? { topicos: { some: { id: parseInt(topicoId) } } } : {}
      ]
    }
  });
};



export { createCurso, getAllCursos, getAllCursosByFiltro };
