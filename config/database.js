// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

/**
 * Conexão com Postgres local. Lembre-se de criar, no banco local, o seguinte usuário:
 * Usuário: enciropedia
 * Senha: enciropedia
 * Permissões: Login
 *
 * Também é necessário criar o banco de dados enciropedia e colocar o usuário criado como dono.
 */
const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host: config.host,
            port: config.port,
            database: config.database,
            user: config.user,
            password: config.password,
        },
        debug: false,
    },
});
