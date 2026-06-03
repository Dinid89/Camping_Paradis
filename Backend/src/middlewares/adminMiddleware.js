// Verifier que la personne se connecte est bien un admin
const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({message : "Vous n'avez pas l'autorisation"})
    }
    next()
}

module.exports = {adminMiddleware}