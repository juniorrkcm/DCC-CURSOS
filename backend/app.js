import express from 'express';
import categoriaRoutes from './src/routes/categoria.routes.js';
import cursoRoutes from './src/routes/curso.routes.js';
import topicoRoutes from './src/routes/topico.routes.js';
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());

// Usar as rotas
app.use('/categorias', categoriaRoutes);
app.use('/cursos', cursoRoutes);
app.use('/topicos', topicoRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
