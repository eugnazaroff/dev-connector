const express = require('express')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const router = express.Router()
const config = require('config')

router.post(
    '/',
    [
        check('name', 'name is required').notEmpty(),
        check('email', 'please include valid email').isEmail(),
        check(
            'password',
            'please enter a password with 6 or more characters'
        ).isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            })
        }
        const { name, email, password } = req.body

        try {
            let candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({
                    errors: [{ msg: 'user already exists' }],
                })
            }
            const user = new User({ name, email, password })
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)
            await user.save()

            const payload = {
                user: {
                    id: user.id,
                },
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err
                    res.json({ token })
                }
            )
        } catch (error) {
            res.status(500).send(error)
        }
    }
)

module.exports = router
