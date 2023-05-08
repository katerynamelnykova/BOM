const express = require('express')
const router = express.Router()

const { getDZO, getDZOByID } = require('../controllers/dzo')

router.route("/").get(getDZO)

router.route("/:idDetail").get(getDZOByID)

module.exports = router;