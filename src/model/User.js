const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    fullname: String,
    phone: String,
    email: String,
    isAdmin: Boolean,
})

module.exports = mongoose.model('User', User)