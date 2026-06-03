const express = require('express')
const {getAllHebergement, getHebergementById, createHebergement, updateHebergement, deleteHebergement} = require('../controllers/hebergementController')
const {authMiddleware} =  require("../middlewares/authMiddleware.js")
const {adminMiddleware} = require("../middlewares/adminMiddleware.js")
const router = express.Router()

router.get('/', getAllHebergement)
router.get('/:id', getHebergementById)
router.post('/', authMiddleware, adminMiddleware, createHebergement) //route protégée
router.put('/:id', authMiddleware, adminMiddleware, updateHebergement)
router.delete('/:id', authMiddleware, adminMiddleware, deleteHebergement)

module.exports = router