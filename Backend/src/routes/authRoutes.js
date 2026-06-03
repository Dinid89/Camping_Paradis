const express = require('express')
const {register, login} = require('../controllers/authController')
const { authLimiter } = require('../middlewares/rateLimiter')
const {validate, validateRegister} = require('../middlewares/validateMiddleware')
const router = express.Router()


router.post('/register', authLimiter, validateRegister, validate, register)
router.post('/login', authLimiter, login)

module.exports = router