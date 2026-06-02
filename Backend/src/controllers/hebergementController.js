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

//Creation d'un hebergement
const createHebergement = (req, res) => {
    const { nom, type, capacite, prix_nuit, description, image } = req.body
    const sql = 'INSERT INTO hebergements (nom, type, capacite, prix_nuit, description, image) VALUES (?, ? ,? , ?, ?, ?)'
    db.query(sql, [nom, type, capacite, prix_nuit, description, image], (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur Serveur"})
        }
        res.status(201).json({message : "Hebergement crée avec succès" })
    })
}

//Modifier un hebergement
const updateHebergement = (req, res) => {
    const id = req.params.id
    const { nom, type, capacite, prix_nuit, description, image } = req.body
    const sql = "UPDATE hebergements SET nom = ?, type = ?, capacite = ?, prix_nuit = ?, description = ?, image = ? WHERE id = ?"
    db.query(sql, [nom, type, capacite, prix_nuit, description, image, id], (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur serveur"})
        }
        res.status(200).json({message : "Hebergement modifié avec succès"})
    })
}

// supprimer un hebergement
const deleteHebergement = (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM hebergements WHERE id = ?"
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur serveur"})
        }
        res.status(204).send()
    })
}

module.exports = {getAllHebergement, getHebergementById, createHebergement, updateHebergement, deleteHebergement}