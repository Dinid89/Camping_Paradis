const express = require('express')
const {authMiddleware} =  require("../middlewares/authMiddleware.js")
const {adminMiddleware} = require("../middlewares/adminMiddleware.js")
const {getAllUsers, getUserById, updateUser, deleteUser} = require('../controllers/adminController.js')
const router = express.Router()

router.get('/users', authMiddleware, adminMiddleware, getAllUsers) //liste les utilisateurs
router.get('/users/:id', authMiddleware, adminMiddleware, getUserById) //voir un utilisateur
router.put('/users/:id', authMiddleware, adminMiddleware, updateUser) // modifier un utilisateur
router.delete('/users/:id', authMiddleware, adminMiddleware, deleteUser) // supprimer un utilisateur


module.exports = router