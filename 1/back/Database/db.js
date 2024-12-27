const { Pool } = require('pg');

const pool = new Pool ({
    host: '34.64.248.193',
    port: 5432,
    user: 'codelab',
    password: 'codelab1234',
    database: 'postgres',    
})

module.exports = pool