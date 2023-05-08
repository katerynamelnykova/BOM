const express = require('express')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.status(200).json({"message": "top directory"})
})

const routesDZO = require('./routes/dzo')
app.use('/dzo', routesDZO)

const routesTO = require('./routes/to')
app.use('/to', routesTO)

app.listen(port,
    () => console.log("Server is running on port: " + port));