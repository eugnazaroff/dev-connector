const express = require('express')
const router = express.Router()

router.get('/', () => res.send('user router'))

module.exports = router
