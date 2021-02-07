const express = require('express')
const authRouter = require('./routes/api/auth')
const usersRouter = require('./routes/api/users')
const profileRouter = require('./routes/api/profile')
const postsRouter = require('./routes/api/posts')
const app = express()

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/posts', profileRouter)
app.use('/api/profile', postsRouter)
