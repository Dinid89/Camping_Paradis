//mysql2 met en relation MySQL et le backend
const mysql = require("mysql2")

//info de connexion de mysql
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

module.exports = connection

//connection a MySQL
connection.connect((err) => {
    if (err) {
        console.error('Erreur de la connexion MySQL:', err.message)
        return
    }
    console.log('Connecté au serveur MySQL')
})