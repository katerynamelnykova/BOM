const asyncHandler = require('express-async-handler')

const connection = require('../db')

const getTO = asyncHandler(async (req, res) => {
    try {
        connection.query("SELECT * FROM coursework.TO", (err, rows, fields) => {
            if (err) throw err
            res.status(200).json({message: rows})
        })
    } catch {
        console.error(error);
        res.status(500).send('Server error');
    }
})

const getTOByID = asyncHandler(async (req, res) => {
    try {
        connection.query(`SELECT * FROM coursework.TO WHERE idTO=${req.params.idTO}`, (err, rows, fields) => {
            if (err) throw err
            res.status(200).json({message: rows})
        })
    } catch {
        console.error(error);
        res.status(500).send('Server error');
    }
})

module.exports = {
    getTO,
    getTOByID
}