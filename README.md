# DailyDietAPI

Desafio técnico do curso de NodeJS da plataforma Rocketseat, para testar meus conhecimento na criação básica de APIs Rest. O desafio consiste em uma API onde o usuário irá registrar todas as suas refeições do dia para ter um controle sobre elas, simulando um aplicativo de nutricionistas.

## Tecnologias utilizadas:
- Node.js
- Fastify
- TypeScript
- Knex.js
- SQLite (padrão, mas pode usar PostgreSQL, MySQL, etc.)

## Estrutura da aplicação
```
.
├── src/
│   ├── server.ts        # Ponto de entrada da aplicação
│   ├── routes/          # Rotas HTTP
│   ├── database/        # Configuração do Knex e migrations
│   └── controllers/     # Lógica das requisições
├── db/                  # Arquivos do banco de dados (SQLite)
├── knexfile.ts          # Configuração do Knex
├── package.json
└── README.md
````
  

## Instalação

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navegue até o diretório do repositório:

   ```
   cd my-node-ts-app
   ```

3. Instale as dependências:

   ```
   npm install
   ```

## Configuratção

O projeto está usando TypeScript como padrão. Então você precisará instalar o ``tsconfig.json``
