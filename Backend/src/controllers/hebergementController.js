const db = require('../config/db')

const getAllHebergement = (req, res) => {
    const sql = 'SELECT * FROM hebergements'
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur Serveur"})
        }
        return res.status(200).json(result)
    })
}

module.exports = {getAllHebergement}