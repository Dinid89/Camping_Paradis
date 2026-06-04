//imports 
require ('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authRoutes = require('./src/routes/authRoutes')
const hebergementRoutes = require('./src/routes/hebergementRoutes')
const reservationRoutes = require('./src/routes/reservationRoutes')
const { authMiddleware } = require('./src/middlewares/authMiddleware')
const paiementRoutes = require('./src/routes/paiementRoutes.js')
const userRoutes = require('./src/routes/userRoutes.js')

const db = require('./src/config/db')

//app
const app = express()

//middleware
app.use(cors())
app.use((req, res, next) => {
    if (req.originalUrl === '/api/paiements/webhook') {
        next()
    } else {
        express.json()(req, res, next)
    }
})
app.use(helmet())


//routes
app.get('/', (req, res) => {
  res.json({ message: 'Serveur Camping Paradis opérationnel'})
})

app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({message : "Accès autorisé", user: req.user })
})

app.use('/api/auth', authRoutes)
app.use('/api/hebergements', hebergementRoutes)
app.use('/api/reservations', reservationRoutes)
app.use('/api/paiements', paiementRoutes)
app.use('/api/users', userRoutes)


//PORT
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Camping Paradis listening on port ${port}`)
})