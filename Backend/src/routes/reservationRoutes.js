const express = require('express')
const {getAllReservation, getReservationByUser, createReservation, updateReservation, deleteReservation} = require('../controllers/reservationController')
const {authMiddleware} =  require("../middlewares/authMiddleware.js")
const {adminMiddleware} = require("../middlewares/adminMiddleware.js")
const router = express.Router()

router.get('/', authMiddleware, getAllReservation)
router.get('/user', authMiddleware, getReservationByUser)
router.post('/', authMiddleware, createReservation)
router.put('/:id', authMiddleware, adminMiddleware,  updateReservation)
router.delete('/:id', authMiddleware, adminMiddleware,  deleteReservation)

module.exports = router