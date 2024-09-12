import { API_ENDPOINT } from "../constants.api.js";

export function novoCurso(curso) {
    // Criando os elementos principais
    const divBox = document.createElement('div');
    divBox.classList.add('box');

    const divTutor = document.createElement('div');
    divTutor.classList.add('tutor');

    const divInfo = document.createElement('div');
    divInfo.classList.add('info');

    const h3 = document.createElement('h3');
    h3.textContent = curso.titulo;

    // Criando a thumb (imagem do curso)
    const divThumb = document.createElement('div');
    divThumb.classList.add('thumb');

    const img = document.createElement('img');
    img.src = curso.imagemUrl; // URL da imagem passada no objeto curso
    img.alt = curso.titulo;

    // Criando o link para o curso
    const link = document.createElement('a');
    link.href = curso.sobre; // Link passado no objeto curso
    link.classList.add('inline-btn');
    link.textContent = 'Sobre o Curso';

    // Montando a estrutura
    divInfo.appendChild(h3);
    divTutor.appendChild(divInfo);

    divThumb.appendChild(img);

    divBox.appendChild(divTutor);
    divBox.appendChild(divThumb);
    divBox.appendChild(link);

    return divBox;
}


export async function carregarCursos() {
    try {
        const response = await fetch(`${API_ENDPOINT}/cursos`);
        const cursos = await response.json();

        const cursoList = document.getElementById('cursos');
        cursoList.innerHTML = ''; // Limpa o conteúdo anterior.

        // Para cada curso, cria o elemento HTML usando a função novoCurso e o anexa ao container.
        cursos.forEach(curso => {
            const cursoElement = novoCurso(curso); // Gera a estrutura do curso
            cursoList.appendChild(cursoElement);   // Adiciona ao contêiner de cursos
        });
    } catch (error) {
        console.error('Erro ao carregar cursos:', error);
    }
}
