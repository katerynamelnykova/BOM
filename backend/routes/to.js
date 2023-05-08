const express = require('express')
const router = express.Router()

const { getTO, 
        getTOByID,
        updateTO,
        deleteTO,
        createTO } = require('../controllers/to')

router.route("/").get(getTO).post(createTO)

router.route("/:idTO").get(getTOByID).put(updateTO).delete(deleteTO)

module.exports = router;