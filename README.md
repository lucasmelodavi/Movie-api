# Progeto  MOvie API

API REST para gerenciamento de filmes desenvolvida com NestJS, TypeScript, PostgreSQL e TypeORM.

## Tecnologias utilizadas

* NestJS
* TypeScript
* PostgreSQL
* TypeORM
* Swagger

## Funcionalidades

* Cadastro de filmes
* Listagem de filmes
* Busca de filme por ID
* Atualização de filmes
* Exclusão de filmes
* Filtro por título
* Busca por gênero

## Instalação

```bash
npm install
```

## Execução

```bash
npm run start:dev
```

## Swagger

Documentação da API:

```text
http://localhost:3000/api
```

## Variáveis de ambiente

Criar um arquivo `.env` baseado no `.env.example`.

Exemplo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=moviesdb
```
