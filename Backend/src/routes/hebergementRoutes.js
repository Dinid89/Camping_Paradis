const express = require('express')
const {getAllHebergement, getHebergementById} = require('../controllers/hebergementController')
const router = express.Router()

router.get('/', getAllHebergement)
router.get('/:id', getHebergementById)
//router.post('/', createHebergement)
//router.put('/:id', updateHebergement)
//router.delete('/:id', deleteHebergement)

module.exports = router