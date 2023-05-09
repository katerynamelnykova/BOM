const asyncHandler = require('express-async-handler')

const connection = require('../db')

const getDZO = asyncHandler(async (req, res) => {
    try {
        connection.query("SELECT * FROM coursework.DZO", (err, rows, fields) => {
            if (err) {
                res.status(500).send('Server error');
            } else {
                res.status(200).json({message: rows})
            }
        })
    } catch {
        console.error(error);
        res.status(500).send('Server error');
    }
})

const getDZOByID = asyncHandler(async (req, res) => {
    try {
        connection.query(`SELECT * FROM coursework.DZO WHERE idDetail=${req.params.idDetail}`, (err, rows, fields) => {
            if (err) {
                res.status(500).send('Server error');
            } else {
                res.status(200).json({message: rows})
            }
        })
    } catch {
        console.error(error);
        res.status(500).send('Server error');
    }
})

const updateDZO = asyncHandler(async (req, res) => {
    try {
        connection.query(`SELECT * FROM coursework.DZO WHERE idDetail=${req.params.idDetail}`, 
        (err, rows, fields) => { 
            if (err) {
                res.status(500).send('Server error');
            }
            const dzo = rows[0]
            const idParentDetail = parseInt(req.body.idParentDetail) || dzo.idParentDetail;
            const amount = parseFloat(req.body.amount) || dzo.amount;
            const cost = parseFloat(req.body.cost) || dzo.cost;
            const weight = parseFloat(req.body.weight) || dzo.weight;
            const name = req.body.name || dzo.name;
            const body_isManufactured = parseInt(req.body.isManufactured)
            const isManufactured = body_isManufactured === 1 || body_isManufactured === 0 ? body_isManufactured : dzo.isManufactured

            connection.query(`UPDATE coursework.DZO SET idParentDetail = ${idParentDetail}, amount = ${amount}, cost = ${cost}, weight = ${weight}, name = '${name}', isManufactured = ${isManufactured}  WHERE (idDetail = ${req.params.idDetail});`, (err, rows, fields) => {
                if (err) {
                    res.status(500).send('Server error');
                } else {
                    res.status(200).json({message: rows})
                }
            })
        })
    } catch {
        console.error(error);
        res.status(500).send('Server error');
    }

})

const deleteDZO = asyncHandler(async (req, res) => {
    try {
        connection.query(`DELETE FROM coursework.DZO WHERE (idDetail = ${req.params.idDetail})`, (err, rows, fields) => {
            if (err) {
                res.status(500).send('Server error');
            } else {
                res.status(200).json({message: rows})
            }
        })
    } catch {
        console.error(error);
        res.status(500).send('Server error');
    }
})

const createDZO = asyncHandler(async (req, res) => {
    try {
        const idParentDetail = parseInt(req.body.idParentDetail) || null;
        const amount = parseFloat(req.body.amount) || null;
        const cost = parseFloat(req.body.cost) || null;
        const weight = parseFloat(req.body.weight) || null;
        const name = req.body.name || '';
        const body_isManufactured = parseInt(req.body.isManufactured)
        const isManufactured = body_isManufactured === 1 || body_isManufactured === 0 ? body_isManufactured : 0

        connection.query(`INSERT INTO coursework.DZO (idParentDetail, amount, cost, weight, name, isManufactured) VALUES (${idParentDetail}, ${amount}, ${cost}, ${weight}, '${name}', ${isManufactured});`, (err, rows, fields) => {
            if (err) {
                res.status(500).send('Server error');
            } else {
                res.status(200).json({message: rows})
            }
        })
    } catch {
        console.error(error);
        res.status(500).send('Server error');
    }

})

module.exports = {
    getDZO,
    getDZOByID,
    updateDZO,
    deleteDZO,
    createDZO
}