const bcrypt = require('bcrypt')
const db = require('../config/db')

const register = async (req, res) => {
    //recupere nom, mail et mdp a l'inscription
    const { nom, prenom, email, password } = req.body
    console.log(nom, prenom, email, password)

    // secutie : hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10)

    //insertion dans la base
    const sql = 'INSERT INTO users (nom, prenom, email, password) VALUES (?, ?, ?, ?)'
    db.query(sql, [nom, prenom, email, hashedPassword], (err, result) => {
       if (err) { 
            return res.status(500).json({ message : 'Erreur serveur'})
        }
        res.status(201).json({message : 'Utilisateur crée avec succès'})
    })
}

module.exports = {register}

