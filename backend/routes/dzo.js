const express = require('express')
const router = express.Router()

const { getDZO, 
        getDZOByID,
        updateDZO } = require('../controllers/dzo')

router.route("/").get(getDZO)

router.route("/:idDetail").get(getDZOByID).put(updateDZO)

module.exports = router;