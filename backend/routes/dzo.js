const express = require('express')
const router = express.Router()

const { getDZO, 
        getDZOByID,
        updateDZO,
        deleteDZO,
        createDZO } = require('../controllers/dzo')

router.route("/").get(getDZO).post(createDZO)

router.route("/:idDetail").get(getDZOByID).put(updateDZO).delete(deleteDZO)

module.exports = router;