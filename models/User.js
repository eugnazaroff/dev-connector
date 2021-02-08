const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    date: {
        type: Date,
        default: Date.now,
        select: false,
    },
})

module.exports = User = model('User', userSchema)
