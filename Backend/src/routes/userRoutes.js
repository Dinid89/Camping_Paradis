const express = require('express')
const {authMiddleware} =  require("../middlewares/authMiddleware.js")
const {getProfile, updateProfile, updatePassword} = require('../controllers/userController.js')
const router = express.Router()


router.get('/profile', authMiddleware, getProfile) //voir profil
router.put('/profile', authMiddleware, updateProfile) // modifier profil
router.put('/password', authMiddleware, updatePassword) // modifier mdp


module.exports = router