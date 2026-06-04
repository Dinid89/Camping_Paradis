const db = require('../config/db')

//lister tous les utilisateurs
const getAllUsers = (req, res) => {
    //le mot de passe ne doit pas apparaitre dans la liste
    const sql = 'SELECT id, nom, prenom, email, phone, role, created_at FROM users'
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ message : "Erreur serveur"})
        }
        return res.status(200).json(result)
    })
}

//Voir un utilisateur
const getUserById = (req, res) => {
    const id = req.params.id
    const sql = 'SELECT id, nom, prenom, email, phone, role, created_at FROM users WHERE id = ?'
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur serveur"})
        }
        if (result.length === 0) {
            return res.status(404).json({ message : "Aucun utilisateur trouvé"})
        }
        return res.status(200).json(result[0])
    })
}

// //Créer un utilisateur
// const createUser = (req, res) => {
//     const { nom, prenom, email, phone, role } = req.body
//     const sql = 'INSERT INTO users (nom, prenom, email, phone, role) VALUES (?, ?, ?, ?, ?)'
//     db.query(sql, [nom, prenom, email, phone, role], (err, result) => {
//         if (err) {
//             return res.status(500).json({message : "Erreur serveur"})
//         }
//         res.status(201).json({message : "Client crée avec succès"})
//     })
// }


//Modifier un utilisateur
const updateUser = (req, res) => {
    const id = req.params.id
    const {nom, prenom, email, phone, role} = req.body

    const sql = "UPDATE users SET nom = ?, prenom = ?, email = ?, phone = ?, role = ? WHERE id = ?"
    db.query(sql, [nom, prenom, email, phone, role, id], (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur serveur"})
 
        }
        return res.status(200).json({message : "Utilisateur modifié avec succès"})
    })
}

//Supprimer un utilisateurs
const deleteUser = (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM users WHERE id = ?"
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({message : "Erreur serveur"})
        }
        return res.status(204).send()
    })
}

module.exports = {getAllUsers, getUserById, updateUser, deleteUser}