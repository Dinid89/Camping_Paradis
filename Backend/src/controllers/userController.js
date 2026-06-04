const db = require('../config/db')
const bcrypt = require('bcrypt')

//Récuperer le profil
const getProfile = (req, res) => {
    const id = req.user.id
    console.log("Profile demandé : ", id)

    const sql = 'SELECT id, nom, prenom, email, phone, role, created_at FROM users WHERE id = ?'
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur serveur"})
        }
        if (result.length === 0) {
            return res.status(404).json({message : "Aucune utilisateur trouvé"})
        }
        return res.status(200).json(result[0])
    })
}

//Modifier le profil
const updateProfile = (req, res) => {
    const id = req.user.id
    const {nom, prenom, phone} = req.body

    const sql = "UPDATE users SET nom = ?, prenom = ?, phone = ? WHERE id = ?"
    db.query(sql, [nom, prenom, phone, id], (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur serveur"})
        }
        res.status(200).json({ message : "Profil modifié avec succès"})
    }) 
}

//Modifier le mot de passe
const updatePassword = (req, res) => {
    const id = req.user.id
    const { ancienPassword, nouveauPassword } = req.body
    
    //Recuperer le profil
    const sql = "SELECT * FROM users WHERE id = ?"
    db.query(sql, [id], async (err, result) => {
        if (err) {
            return res.status(500).json({message :"Erreur serveur"})
        }
        if (result.length === 0) {
            return res.status(404).json({message : "Profil introuvable"})
        }
        
        //verifier ancien mot de passe
        const validPassword = await bcrypt.compare(ancienPassword, result[0].password)
        if (!validPassword) {
            return res.status(401).json({message : "Ancien Mot de passe incorrect"})
        }

        //hasher le nouveau mot de passe
        const hashedPassword = await bcrypt.hash(nouveauPassword, 10)

        //Inserer nouveau mot de passe
        const sql = 'UPDATE users SET password = ? WHERE id = ?'
        db.query(sql, [hashedPassword, id], (err, result) => {
            if (err) {
                return res.status(500).json({message : "Erreur Serveur"})

            }
            return res.status(200).json({ message : "Mot de passe modifié avec succès"})
        })

    })
     
}

module.exports = {getProfile, updateProfile, updatePassword}