const express = require('express')
const router = express.Router()

router.get('/', () => res.send('posts router'))

module.exports = router
