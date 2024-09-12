import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

  // Criando categorias
  const categorias = [
    {
      nome: "Desenvolvimento",
      icone: "fas fa-code"
    },
    {
      nome: "Inteligência Artificial",
      icone: "fas fa-brain"
    },
    {
      nome: "Ciência de Dados",
      icone: "fas fa-chart-simple"
    },
    {
      nome: "Internet das Coisas",
      icone: "fas fa-microchip"
    },
    {
      nome: "Segurança da Informação",
      icone: "fas fa-user-secret"
    },
    {
      nome: "Informática",
      icone: "fas fa-computer"
    }
  ];

  // Inserindo as categorias no banco de dados
  for (const categoria of categorias) {
    await prisma.categoria.create({
      data: categoria
    });
  }

  console.log("Categorias adicionadas com sucesso!");

  // Criando tópicos
  const topicos = [
    {
      nome: "HTML",
      icone: "fab fa-html5"
    },
    {
      nome: "CSS",
      icone: "fab fa-css3"
    },
    {
      nome: "JavaScript",
      icone: "fab fa-js"
    },
    {
      nome: "React",
      icone: "fab fa-react"
    },
    {
      nome: "Python",
      icone: "fab fa-python"
    },
    {
      nome: "Bootstrap",
      icone: "fab fa-bootstrap"
    }
  ];

  // Inserindo os tópicos no banco de dados
  for (const topico of topicos) {
    await prisma.topico.create({
      data: topico
    });
  }
  
  console.log("Tópicos adicionados com sucesso!");

  // Inserindo os cursos
  const cursos = [
    {
      titulo: "Inteligência Artificial Aplicada à Saúde",
      descricao: "Curso sobre IA aplicada à saúde",
      imagemUrl: "images/iasaude2.jpg",
      sobre: "https://iaservicosdasaude.webflow.io/",
      categoriaId: 1
    },
    {
      titulo: "Data Science Aplicada à Saúde",
      descricao: "Curso sobre Data Science aplicada à saúde",
      imagemUrl: "images/datascience2.jpg",
      sobre: "https://sites.google.com/view/datascienceufrr/p%C3%A1gina-inicial",
      categoriaId: 1
    },
    {
      titulo: "ABC da Inteligência Artificial",
      descricao: "Curso básico de IA",
      imagemUrl: "images/abcia2.jpg",
      sobre: "https://sites.google.com/view/abcia/",
      categoriaId: 1
    },
    {
      titulo: "Macuxi Digital",
      descricao: "Curso sobre Macuxi Digital",
      imagemUrl: "images/macuxi2.jpg",
      sobre: "https://macuxidigital.wixsite.com/macuxi-digital---ufr",
      categoriaId: 1
    },
    {
      titulo: "Maloca das iCoisas",
      descricao: "Curso sobre Internet das Coisas",
      imagemUrl: "images/maloca2.jpg",
      sobre: "https://sites.google.com/view/icoisas-dcc",
      categoriaId: 1
    },
    {
      titulo: "Indata",
      descricao: "Curso de análise de dados",
      imagemUrl: "images/indata2.jpg",
      sobre: "https://ufrrcurso.wixsite.com/indata/home",
      categoriaId: 1
    }
  ];

  // Inserindo os cursos no banco de dados
  for (const curso of cursos) {
    await prisma.curso.create({
      data: curso
    });
  }

  console.log("Cursos adicionados com sucesso!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
