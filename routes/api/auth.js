const express = require('express')
const router = express.Router()

router.get('/', () => res.send('auth router'))

module.exports = router