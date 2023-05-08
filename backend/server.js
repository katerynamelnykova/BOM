const express = require('express')
app = express()
const port = process.env.PORT || 3000

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '0000',
  database: 'coursework'
})

connection.connect()

connection.query("SELECT * FROM coursework.TO", (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows)
})

//connection.end()

app.listen(port,
    () => console.log("Server is running on port: " + port));