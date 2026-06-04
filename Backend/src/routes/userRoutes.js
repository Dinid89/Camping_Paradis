const express = require('express')
const {authMiddleware} =  require("../middlewares/authMiddleware.js")
const {getProfile} = require('../controllers/userController.js')
const router = express.Router()


router.get('/profile', authMiddleware, getProfile) //voir profil
//router.put('/profile', authMiddleware) // modifier profil
//router.put('/password', authMiddleware) // modifier mdp


module.exports = router