# Roteiro do curso

## Aula03 - Apresentando o TypeScript

- [x] TypeScript essencial.
- [x] Iniciar o package.json com o `npm init -y`.
- [x] Instalar o TypeScript pois o Node não intender Typescript por padrão. `npm i -D typescript @types/node`.
- [x] Iniciar o arquivo de configuração do TS com `npx tsc --init` e alterar o **target** para `es2020`
- [x] Instalar o Fastify `npm i fastify`.
- [x] Criar o arquivo `server.ts` e iniciar um servidor utilizando o Fastify.
- [x] Instalar o TSX com `npm i -D tsx` para executar os arquivos .ts e gerar o .js automaticamente.
- [x] Rodar o servidor utilizando o tsx.
- [x] Criar um script para iniciar o servidor.

## Aula07 - Configurando o query builder Knex

- [x] Instalar o Knex e o banco de dados que será utilizado com `npm install knex sqlite3 --save`.
- [x] Criar o arquivo que será responsável por realizar a conexão com o banco `database.ts`.
- [ ] Realizar uma consulta na tabela `sqlite_schema` para verificar se a conexão funcionou.

## Aula08 - Criando a primeira migration

- [x] Para criar as migrations, antes é necessário criar o arquivo `knexfile.ts` na raiz do projeto e nesse arquivo importar as configurações de conexão do banco. OBS: As configurações, e não a conexão.
- [ ] Execute `npm run knex -- migrate:make migration-name` para criar uma migration

## Aula09 - Criando tabelas na migration

- [x] Criar a tabela `transactions` com as colunas `` no campo up e deletar a tabela no campo down.
- [x] Execute o comando `npm run knex -- migrate:latest` para realizar as alterações feitas na ultima migration.
- [x] OBS: Nunca editar uma migration que já foi enviada.
- [x] Para realizar um rollback utilizar o comando `npm run knex -- migrate:rollback`

## Aula 11 - Utilizando variáveis de ambiente

- [x] Criar o arquivo `.env` na raiz do projeto e armazenar os dados como chave=valor.
- [x] Instalar o modulo dotenv `npm i dotenv` e para utilizar as variáveis de ambiente e necessário importar no arquivo desejado `import 'dotenv/config'` e utilizar as variáveis no `process.env.NOME_DA_VARIAVEL`.

## Aula 12 - Validando dados com ZOD

- [x] Instalar a biblioteca zod `npm i zod`
- [x] Criar a pasta `env` e o arquivo `index.ts` para salvar os schemas de dados.

## Aula 15 - Criando rota para adicionar transações

- [ ] I
