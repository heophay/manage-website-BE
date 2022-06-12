const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Prod_buy = require('./Prod_buy')

const Bill = new Schema({
    datetime: String,
    total: Number,
    prod_buy: [Prod_buy],
})

const User = new Schema({
    username: String,
    password: String,
    fullname: String,
    phone: String,
    email: String,
    bills: [Bill],
})

module.exports = mongoose.model('User', User)