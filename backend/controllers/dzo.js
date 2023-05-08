const asyncHandler = require('express-async-handler')

const connection = require('../db')

const getDZO = asyncHandler(async (req, res) => {
    try {
        connection.query("SELECT * FROM coursework.DZO", (err, rows, fields) => {
            if (err) throw err
            res.status(200).json({message: rows})
        })
    } catch {
        console.error(error);
        res.status(500).send('Server error');
    }
})

const getDZOByID = asyncHandler(async (req, res) => {
    try {
        connection.query(`SELECT * FROM coursework.DZO WHERE idDetail=${req.params.idDetail}`, (err, rows, fields) => {
            if (err) throw err
            res.status(200).json({message: rows})
        })
    } catch {
        console.error(error);
        res.status(500).send('Server error');
    }
})

module.exports = {
    getDZO,
    getDZOByID
}