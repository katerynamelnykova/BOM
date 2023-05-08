const express = require('express')
const router = express.Router()

const { getTO, 
        getTOByID,
        updateTO,
        deleteTO } = require('../controllers/to')

router.route("/").get(getTO)

router.route("/:idTO").get(getTOByID).put(updateTO).delete(deleteTO)

module.exports = router;