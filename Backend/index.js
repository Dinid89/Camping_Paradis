//imports 
require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const authRoutes = require('./src/routes/authRoutes')

const db = require('./src/config/db')

//app
const app = express()


//middleware
app.use(cors())
app.use(express.json()) 


//routes
app.get('/', (req, res) => {
  res.json({ message: 'Serveur Camping Paradis opérationnel'})
})
app.use('/api/auth', authRoutes)


//PORT
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Camping Paradis listening on port ${port}`)
})