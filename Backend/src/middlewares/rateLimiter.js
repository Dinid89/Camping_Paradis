// Sécurité : nombre de tentative de connexion de 10 et connexion 15 minutes sans activité
const rateLimit = require('express-rate-limit')

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15minutes
    max: 10,
    message: {message: 'Limite de tentative atteinte'}
})

module.exports = {authLimiter}