const mysql = require('mysql2')

const db = mysql.createConnection('mysql://root:rootroot@localhost:3301/jif_db')

module.exports = db