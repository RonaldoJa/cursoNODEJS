const knex = require('knex')
const configMariaDB = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'coder'
    },
    pool: {min: 0, max: 7}
}

const database = knex(configMariaDB);

module.exports = database;