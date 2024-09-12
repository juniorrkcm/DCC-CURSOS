import express from 'express';
import { createTopico, getAllTopicos } from '../services/topico.service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { nome, icone } = req.body;
  try {
    const topico = await createTopico(nome, icone);
    res.json(topico);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tópico' });
  }
});

router.get('/', async (req, res) => {
  try {
    const topicos = await getAllTopicos();
    console.log(topicos);
    res.json(topicos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tópicos' });
  }
});

export default router;
