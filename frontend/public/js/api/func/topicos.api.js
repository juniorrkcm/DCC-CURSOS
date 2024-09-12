import { API_ENDPOINT, aplicarFiltro } from "../constants.api.js";

function novoTopico(topico) {
    // <a href="#"><i class="fas fa-code"></i><span>Desenvolvimento</span></a>
    const tag_A = document.createElement('a');
    const tag_I = document.createElement('i');
    const tag_SPAN = document.createElement('span');
    // Nome da Topico
    tag_SPAN.innerHTML = topico.nome;
    // icone
    tag_I.classList.add(...topico.icone.split(' '))
    // link para onde vai
    tag_A.href = '#';    
    tag_A.id = topico.id;
    tag_A.appendChild(tag_I);
    tag_A.appendChild(tag_SPAN);

    // Adiciona um listener para aplicar o filtro por tópico ao clicar
    tag_A.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar redirecionamento
        aplicarFiltro({ topicoId: topico.id });
    });

    return tag_A;
}

export async function carregarTopicos() {
    try {
        const response = await fetch(`${API_ENDPOINT}/topicos`);
        const topicos = await response.json();

        const topicoList = document.getElementById('topicos');
        topicoList.innerHTML = '';
        topicos.forEach(topico => {
            const topicoElement = novoTopico(topico);
            topicoList.appendChild(topicoElement);
        });
    } catch (error) {
        console.error('Erro ao carregar topicos:', error);
    }
}
