import express from 'express';
import { createCurso, getAllCursos, getAllCursosByFiltro } from '../services/curso.service.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { titulo, descricao, imagemUrl, categoriaId, topicoIds } = req.body;
  try {
    const curso = await createCurso(titulo, descricao, imagemUrl, categoriaId, topicoIds);
    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar curso' });
  }
});

router.get('/', async (req, res) => {
  try {
    // Pegando os parâmetros de filtro da URL (query params)
    const { categoriaId, topicoId } = req.query;

    let cursos;

    // Verifica se há algum filtro (categoriaId ou topicoId)
    if (categoriaId || topicoId) {
      // Passa os filtros para a função
      cursos = await getAllCursosByFiltro({ categoriaId, topicoId });
    } else {
      // Se não houver filtros, pega todos os cursos
      cursos = await getAllCursos();
    }
    console.log('Cursos ', cursos);
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
});


export default router;
