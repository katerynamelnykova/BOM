const express = require('express')
const router = express.Router()

const { getTO, getTOByID } = require('../controllers/to')

router.route("/").get(getTO)

router.route("/:idTO").get(getTOByID)

module.exports = router;