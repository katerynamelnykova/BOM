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

const updateTO = asyncHandler(async (req, res) => {
    try {
        connection.query(`SELECT * FROM coursework.TO WHERE idTO=${req.params.idTO}`, 
        (err, rows, fields) => { 
            if (err) throw err
            const to = rows[0]
            const idManufacturedDetail = parseInt(req.body.idManufacturedDetail) || to.idManufacturedDetail;
            const sequenceNumber = parseInt(req.body.sequenceNumber) || to.sequenceNumber;
            const district = req.body.district || to.district;
            const department = req.body.department || to.department;
            const equipmentTimeCost = parseFloat(req.body.equipmentTimeCost) || to.equipmentTimeCost;
            const cost = parseFloat(req.body.cost) || to.cost;
            const workerTimeCost = parseFloat(req.body.workerTimeCost) || to.workerTimeCost;
            const name = req.body.name || to.name;

            connection.query(`UPDATE coursework.TO SET idManufacturedDetail = ${idManufacturedDetail}, sequenceNumber = ${sequenceNumber}, district = '${district}', department = '${department}', equipmentTimeCost = '${equipmentTimeCost}', workerTimeCost = '${workerTimeCost}', cost = '${cost}', name = '${name}' WHERE (idTO = ${req.params.idTO});`, (err, rows, fields) => {
                if (err) throw err
                res.status(200).json({message: rows})
            })
        })
    } catch {
        console.error(error);
        res.status(500).send('Server error');
    }

})

const deleteTO = asyncHandler(async (req, res) => {
    try {
        connection.query(`DELETE FROM coursework.TO WHERE (idTO = ${req.params.idTO})`, (err, rows, fields) => {
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
    getTOByID,
    updateTO,
    deleteTO
}