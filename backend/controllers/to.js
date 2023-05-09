const asyncHandler = require('express-async-handler')

const connection = require('../db')

const getTO = asyncHandler(async (req, res) => {
    try {
        connection.query("SELECT * FROM coursework.TO", (err, rows, fields) => {
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

const getTOByID = asyncHandler(async (req, res) => {
    try {
        connection.query(`SELECT * FROM coursework.TO WHERE idTO=${req.params.idTO}`, (err, rows, fields) => {
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

const updateTO = asyncHandler(async (req, res) => {
    try {
        connection.query(`SELECT * FROM coursework.TO WHERE idTO=${req.params.idTO}`, 
        (err, rows, fields) => { 
            if (err) {
                res.status(500).send('Server error');
            }
            const to = rows[0]
            const idManufacturedDetail = parseInt(req.body.idManufacturedDetail) || to.idManufacturedDetail;
            const sequenceNumber = parseInt(req.body.sequenceNumber) || to.sequenceNumber;
            const district = req.body.district || to.district;
            const department = req.body.department || to.department;
            const duration = req.body.duration || to.duration;
            const equipmentTimeCost = parseFloat(req.body.equipmentTimeCost) || to.equipmentTimeCost;
            const cost = parseFloat(req.body.cost) || to.cost;
            const workerTimeCost = parseFloat(req.body.workerTimeCost) || to.workerTimeCost;
            const name = req.body.name || to.name;

            connection.query(`UPDATE coursework.TO SET idManufacturedDetail = ${idManufacturedDetail}, sequenceNumber = ${sequenceNumber}, district = '${district}', duration = '${duration}', department = '${department}', equipmentTimeCost = '${equipmentTimeCost}', workerTimeCost = '${workerTimeCost}', cost = '${cost}', name = '${name}' WHERE (idTO = ${req.params.idTO});`, (err, rows, fields) => {
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

const deleteTO = asyncHandler(async (req, res) => {
    try {
        connection.query(`DELETE FROM coursework.TO WHERE (idTO = ${req.params.idTO})`, (err, rows, fields) => {
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

const createTO = asyncHandler(async (req, res) => {
    try {
        const idManufacturedDetail = parseInt(req.body.idManufacturedDetail) || null;
        const sequenceNumber = parseInt(req.body.sequenceNumber) || null;
        const district = req.body.district || null;
        const department = req.body.department || null;
        const duration = req.body.duration || null;
        const equipmentTimeCost = parseFloat(req.body.equipmentTimeCost) || null;
        const cost = parseFloat(req.body.cost) || null;
        const workerTimeCost = parseFloat(req.body.workerTimeCost) || null;
        const name = req.body.name || '';

        connection.query(`INSERT INTO coursework.TO (idManufacturedDetail, sequenceNumber, duration, district, department, equipmentTimeCost, workerTimeCost, cost, name) VALUES (${idManufacturedDetail}, ${sequenceNumber}, ${duration}, '${district}', '${department}', ${equipmentTimeCost}, ${workerTimeCost}, ${cost}, '${name}');`, (err, rows, fields) => {
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
    getTO,
    getTOByID,
    updateTO,
    deleteTO,
    createTO
}