const express = require('express')
const router = express.Router()

router.get('/', () => res.send('profile router'))

module.exports = router
