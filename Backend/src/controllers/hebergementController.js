const db = require('../config/db')

//Recupere tous les hergements
const getAllHebergement = (req, res) => {
    const sql = 'SELECT * FROM hebergements'
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur Serveur"})
        }
        return res.status(200).json(result)
    })
}

//Recupere les hebergements par ID
const getHebergementById = (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM hebergements WHERE id = ?'
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur Serveur"})
        }
        if (result.length === 0) {
            return res.status(404).json({message : "Aucun hebergement trouvé"})
        }
        return res.status(200).json(result)
    })
}



module.exports = {getAllHebergement, getHebergementById}