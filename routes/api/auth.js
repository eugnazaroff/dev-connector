const express = require('express')
const { check, validationResult } = require('express-validator')
const router = express.Router()
const auth = require('../../middleware/auth')
const User = require('../../models/User')
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
