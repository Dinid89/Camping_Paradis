//imports 
require ('dotenv').config()
const express = require('express')
const cors = require('cors')

//app
const app = express()

//middleware
app.use(cors())

//routes
app.get('/', (req, res) => {
  res.json({ message: 'Serveur opérationnel'})
})


//PORT
const port = process.env.PORT
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})