const express = require('express')
const {getAllHebergement, getHebergementById, createHebergement} = require('../controllers/hebergementController')
const {authMiddleware} =  require("../middlewares/authMiddleware.js")
const router = express.Router()

router.get('/', getAllHebergement)
router.get('/:id', getHebergementById)
router.post('/', authMiddleware, createHebergement) //route protégée
//router.put('/:id', authMiddleware, updateHebergement)
//router.delete('/:id', authMiddleware, deleteHebergement)

module.exports = router