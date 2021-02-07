const express = require('express')
const config = require('config')
const authRouter = require('./routes/api/auth')
const usersRouter = require('./routes/api/users')
const profileRouter = require('./routes/api/profile')
const postsRouter = require('./routes/api/posts')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/posts', profileRouter)
app.use('/api/profile', postsRouter)

const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        app.listen(process.env.PORT || 5000, () => {
            console.log('server started successflly')
        })
    } catch (error) {
        console.log(error)
    }
}

connectToDatabase()
