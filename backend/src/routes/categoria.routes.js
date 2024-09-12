import express from 'express';
import { createCategoria, getAllCategorias } from '../services/categoria.service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { nome, icone } = req.body;
  try {
    const categoria = await createCategoria(nome, icone);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar categoria' });
  }
});

router.get('/', async (req, res) => {
  try {
    const categorias = await getAllCategorias();
    console.log(categorias)
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categorias' });
  }
});

export default router;
