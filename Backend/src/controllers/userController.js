const db = require('../config/db')

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

module.exports = {getProfile}