const mysql = require('mysql')

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'daconaDB'
});

module.exports = db;