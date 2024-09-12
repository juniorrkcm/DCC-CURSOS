import { novoCurso } from './func/curso.api.js'; // Certifique-se de importar a função novoCurso

export const API_ENDPOINT = 'http://localhost:3000';

// Função para aplicar filtros e atualizar a URL com os parâmetros de filtro
export function aplicarFiltro(filtro) {
    // Obter a URL atual
    const url = new URL(window.location.href);

    // Adicionar os parâmetros de filtro à URL
    if (filtro.categoriaId) {
        url.searchParams.set('categoriaId', filtro.categoriaId);
    }
    if (filtro.topicoId) {
        url.searchParams.set('topicoId', filtro.topicoId);
    }

    // Atualizar a URL sem recarregar a página
    window.history.pushState({}, '', url);

    // Fazer a requisição com os parâmetros de filtro
    buscarCursosFiltrados(url.searchParams);
}

// Função para fazer a requisição de cursos filtrados
async function buscarCursosFiltrados(searchParams) {
    try {
        // Montar a URL da API com os parâmetros da URL atual
        const apiUrl = `${API_ENDPOINT}/cursos?${searchParams.toString()}`;
        
        // Fazer a requisição com os filtros
        const response = await fetch(apiUrl);
        const cursos = await response.json();

        // Aqui você pode manipular a resposta, por exemplo, renderizar os cursos filtrados na página
        console.log(cursos);

        // Selecionar o contêiner onde os cursos serão exibidos
        const cursosContainer = document.getElementById('cursos');
        cursosContainer.innerHTML = ''; // Limpa os cursos anteriores

        // Para cada curso retornado, usamos a função novoCurso para gerar o HTML
        cursos.forEach(curso => {
            const cursoElement = novoCurso(curso);  // Usa novoCurso para criar o elemento do curso
            cursosContainer.appendChild(cursoElement);  // Adiciona o curso ao contêiner
        });
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
    }
}

