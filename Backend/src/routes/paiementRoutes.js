const express = require('express')
const { createCheckoutSession } = require('../controllers/paiementController')
const { authMiddleware } = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/checkout', authMiddleware, createCheckoutSession)

module.exports = router