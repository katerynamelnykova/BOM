const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '0000',
  database: 'coursework'
})

connection.connect()

module.exports = connection