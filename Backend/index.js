//imports 
require ('dotenv').config()
const express = require('express')
const cors = require('cors')

const db = require('./src/config/db')

//app
const app = express()

//middleware
app.use(cors())

//routes
app.get('/', (req, res) => {
  res.json({ message: 'Serveur Camping Paradis opérationnel'})
})


//PORT
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Camping Paradis listening on port ${port}`)
})