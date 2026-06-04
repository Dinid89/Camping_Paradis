const express = require('express')
const { createCheckoutSession, webhookStripe } = require('../controllers/paiementController')
const { authMiddleware } = require('../middlewares/authMiddleware')
const router = express.Router()


router.post('/webhook', express.raw({ type: 'application/json' }), webhookStripe)
router.post('/checkout', authMiddleware, createCheckoutSession)


module.exports = router