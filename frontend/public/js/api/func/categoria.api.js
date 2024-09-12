import { API_ENDPOINT, aplicarFiltro } from "../constants.api.js";

function novaCategoria(categoria) {
    // <a href="#"><i class="fas fa-code"></i><span>Desenvolvimento</span></a>
    const tag_A = document.createElement('a');
    const tag_I = document.createElement('i');
    const tag_SPAN = document.createElement('span');
    // Nome da categoria
    tag_SPAN.innerHTML = categoria.nome;
    // icone
    tag_I.classList.add(...categoria.icone.split(' '))
    // link para onde vai
    tag_A.href = '#';    
    tag_A.id = categoria.id;
    tag_A.appendChild(tag_I);
    tag_A.appendChild(tag_SPAN);

    // Adiciona um listener para aplicar o filtro por categoria ao clicar
    tag_A.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar redirecionamento
        aplicarFiltro({ categoriaId: categoria.id });
    });

    return tag_A;
}

export async function carregarCategorias() {
    try {
        const response = await fetch(`${API_ENDPOINT}/categorias`);
        const categorias = await response.json();

        const categoriaList = document.getElementById('categorias');
        categoriaList.innerHTML = '';
        categorias.forEach(categoria => {
            const categoriaElement = novaCategoria(categoria);
            categoriaList.appendChild(categoriaElement);
        });
    } catch (error) {
        console.error('Erro ao carregar categorias:', error);
    }
    // Lógica do botão de reset
    document.getElementById('reset-btn').addEventListener('click', () => {
        const categoriaList = document.getElementById('categorias');
        categoriaList.querySelectorAll('a').forEach(link => {
            link.classList.remove('active'); // Remover a classe 'active' de todas as categorias
        });
        aplicarFiltro({ categoriaId: null }); // Limpa o filtro de categoria
    });
}

