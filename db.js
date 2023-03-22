const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "dacona",
    password: "a",
    port: 5432,
})

module.exports = pool;