import { carregarCategorias } from './func/categoria.api.js';
import { carregarTopicos } from './func/topicos.api.js';
import { carregarCursos } from './func/curso.api.js';


window.onload = () => {
    carregarCategorias();
    carregarTopicos();
    carregarCursos();
};
