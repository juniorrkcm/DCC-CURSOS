# DCC-CURSOS

Este repositório contém um sistema de gerenciamento de cursos desenvolvido para o DCC (Departamento de Ciência da Computação). O sistema permite cadastrar, visualizar e filtrar cursos com uma interface amigável e backend integrado com o Prisma.

## Funcionalidades

- Cadastro e visualização de cursos
- Filtro por categorias
- Interface simples e intuitiva

## Tecnologias utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Prisma para gerenciamento do banco de dados
- **Dependências**: Node.js, npm, Prisma

## Pré-requisitos

- Node.js (versão 14+)
- npm
- Prisma (versão 3+)

## Configuração do Prisma

1. Instale o Prisma:
    ```bash
    npm install prisma --save-dev
    ```

2. Inicialize o Prisma no projeto:
    ```bash
    npx prisma init
    ```

3. Configure o acesso ao banco de dados no arquivo `.env`. Exemplo:
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
    ```

4. Após configurar o Prisma, execute a migração para criar as tabelas no banco de dados:
    ```bash
    npx prisma migrate dev
    ```

5. Para gerenciar o cadastro de cursos e filtros, acesse a interface do Prisma Studio:
    ```bash
    npx prisma studio
    ```

## Como executar o projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/juniorrkcm/DCC-CURSOS.git
    cd DCC-CURSOS
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    npm start
    ```

4. Acesse no navegador:
    ```
    http://localhost:3000
    ```

## Estrutura do projeto

- **frontend/**: Arquivos HTML, CSS e JavaScript
- **backend/**: Configuração e gerenciamento de banco de dados com Prisma
- **package.json**: Gerenciamento de dependências

## Contribuições

Possíveis atualizações podem incluir:
- Adicionar uma página extra para que o administrador possa cadastrar novos cursos diretamente pelo site, sem a necessidade de usar a interface do Prisma Studio.

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
