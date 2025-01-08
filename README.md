# Sistema de Gerenciamento de Inventário

## Descrição

Este é um sistema de gerenciamento de inventário desenvolvido em **Node.js** com a utilização do framework **Fastify**. A aplicação permite adicionar, listar, atualizar, excluir e buscar produtos.

---

## Tecnologias e Ferramentas

- **[Node.js](https://nodejs.org/)** para a construção do backend.
- **[Fastify](https://fastify.dev/)** como framework para construção da API.
- **[Prisma](https://www.prisma.io/)** para abstração de acesso aos dados.
- **[PostgreSQL](https://www.postgresql.org/)** como banco de dados relacional para armazenamento de dados.
- **[Zod](https://github.com/colinhacks/zod)**: Biblioteca para validação de dados e esquemas, garantindo que os dados passados para a API estejam corretos.
- **POO (Programação Orientada a Objetos)**: Estrutura utilizada para organizar e modularizar o código, implementando conceitos como classes, métodos, e reusabilidade.
- **Arquitetura de Software**: Utilização de uma arquitetura limpa com a separação de responsabilidades através de casos de uso, repositórios e controladores.

---

## Funcionalidades

### 1. Adicionar Produto

Permite que o usuário adicione um novo produto ao inventário.

- **Dados solicitados:**
  - Nome do Produto
  - Categoria
  - Quantidade em Estoque
  - Preço
- **Funcionalidades adicionais:**
  - Gerar automaticamente um ID único para cada produto.

### 2. Listar Produtos

Exibe todos os produtos cadastrados no inventário.

- **Informações exibidas:**
  - ID
  - Nome do Produto
  - Categoria
  - Quantidade em Estoque
  - Preço

### 3. Atualizar Produto

Permite atualizar as informações de um produto existente.

- **Etapas do processo:**
  - Verifica se o ID informado existe no inventário.
  - Solicita ao usuário quais campos deseja atualizar:
    - Nome
    - Categoria
    - Quantidade
    - Preço
  - Valida os novos dados antes de salvar as alterações.

### 4. Excluir Produto

Remove um produto do inventário pelo ID.

- **Etapas do processo:**
  - Verifica se o ID informado existe no inventário.
  - Remove o produto do inventário após a confirmação.

### 5. Buscar Produto

Busca e exibe detalhes de um produto específico.

- **Critérios de busca:**
  - Por ID
  - Por parte do nome do produto
- **Resultados:**
  - Exibe todas as informações detalhadas do produto encontrado.
  - Mostra uma mensagem apropriada caso nenhum produto seja encontrado.

---

## Instruções para Uso

### 1. Clone o repositório

Clone este repositório em sua máquina local:

```powershell
git clone https://github.com/BritoRuan/agile-accelerator-be
cd agile-accelerator-be
```

### 2. Instale as dependências

Instale as dependências utilizando o npm:

```powershell
npm install
```

### 3. Configure o banco de dados

3.1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```env
# Environment
NODE_ENV=dev

# Port (deixe vazio para usar a porta padrão)
PORT=

# Database
DATABASE_URL="postgresql://postgres:seu_usuario@localhost:5432/seu_db?schema=public"
```

3.2 Execute as migrações para criar as tabelas do banco de dados:

```powershell
npx prisma migrate dev --name init
```

Isso configura o ambiente e o banco de dados para a execução do projeto.

### 4. Execute a aplicação

Para rodar a aplicação, você pode escolher entre rodar diretamente em modo de desenvolvimento ou compilar o código e executar o build. Aqui estão as duas opções:

4.1 **Modo de Desenvolvimento (sem build)**:

- Execute o comando abaixo para rodar o projeto em modo de desenvolvimento:

```powershell
npm run start:dev
```

Isso irá iniciar o servidor em modo de desenvolvimento e irá observar mudanças nos arquivos.

4.2 Compilação e Execução (build):

- Primeiro, você pode compilar o código TypeScript para JavaScript usando o comando:

```powershell
npm run build
```

- Em seguida, execute a versão compilada do código com:

```powershell
npm start
```

- Isso rodará a versão otimizada da aplicação a partir do diretório build.

Essas instruções vão permitir ao usuário decidir se prefere rodar diretamente em desenvolvimento ou se deseja compilar o código antes de rodar. A decisão depende do que for mais conveniente para o caso de uso do usuário, mas como padrão, rodar diretamente em modo de desenvolvimento pode ser mais rápido durante o desenvolvimento ativo.

### 5. Teste a API

Use um cliente HTTP (como Postman ou Insomnia) para interagir com a API. Você pode fazer requisições para os seguintes endpoints:

- **POST /products**: Adicionar um novo produto
- **GET /products**: Listar todos os produtos
- **GET /products/:id**: Buscar produto por ID
- **PUT /products/:id**: Atualizar um produto
- **DELETE /products/:id**: Excluir um produto

#### Arquivo de Configuração de Rotas

Além dos endpoints mencionados acima, há um arquivo adicional no repositório com as rotas configuradas para facilitar o teste da API. O arquivo se chama `agile-accelerator-be-https`, e nele você encontrará as rotas já configuradas para rodar a aplicação com HTTPS.
