# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Para iniciar o Strapi em ambiente de desenvolvimento, com autoreload **ativado**. [Veja mais](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```sh
npm run develop
# or
yarn develop
```

### `start`

Para iniciar o Strapi em ambiente de desenvolvimento, com autoreload **desativado**. [Veja mais](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```sh
npm run start
# or
yarn start
```

### `build`

Para construir o painel de adminsitração. [Veja mais](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```sh
npm run build
# or
yarn build
```

## Banco de dados

Para executar a Enciropedia localmente, é necessário instalar o PostgreSQL na versão 13.6.

Crie, no banco local, o banco de dados `enciropedia`, o usuário `enciropedia`, com a senha `enciropedia`.

## Problemas

**P: Quando eu entro no admin, algumas áreas mostram apenas páginas em branco. O que faço?**

Nesse caso, é preciso reiniciar o ambiente:

1. Apague as seguintes pastas:
    1. .cache
    2. build
    3. node_modules
    Para apagar a `node_modules`, use o comando `npx rimraf node_modules`
2. Apague os arquivos:
    1. yarn.lock
    2. package-lock.json
3. Execute o `npm install`
4. Execute o `npm run build`
5. Pronto. Pode rodar o servidor de desenvolvimento com `npm run develop`

```sh
npx rimraf node_modules

npm install

npm run build

npm run develop

```

## Referências

- [Plugin Transformer](https://market.strapi.io/plugins/strapi-plugin-transformer)
- [Discussion regarding the complex response structure for REST & GraphQL (Developer Experience)](https://forum.strapi.io/t/discussion-regarding-the-complex-response-structure-for-rest-graphql-developer-experience/13400)
