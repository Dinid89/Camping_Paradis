//Verifier les tokens sur chaque route protégée
const jwt = require('jsonwebtoken')

// Next : passe a la suite si valide, sinon bloque
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ message : 'Token manquant'})
    }
    //extraire le token de "Bearer fneRjvcue ....."
    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({ message : "Token invalide" })
    }
}

module.exports = {authMiddleware}