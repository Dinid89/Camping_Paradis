//Sécurité liée au compte user
const {body, validationResult} = require('express-validator')

const validateRegister = [
    body('nom').notEmpty().withMessage('Le nom est obligatoire'),
    body('prenom').notEmpty().withMessage('Le prénom est obligatoire'),
    body('email').notEmpty().withMessage("L'email est obligatoire"),
    body('password')
        .isLength({ min: 8}).withMessage('Doit contenir 8 caractères minimum')
        .matches(/[A-Z]/).withMessage('Doit contenir 1 majuscule minimum')
        .matches(/[0-9]/).withMessage('Doit contenir 1 chiffre au minimum')
        .matches(/[!@#$%^&*]/).withMessage('Doit contenur 1 caractère spécial minimum'),
]

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    next()
}

module.exports = { validateRegister, validate }