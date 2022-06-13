const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema({
    name: String,
    phone: String,
})

module.exports = mongoose.model('Customer', Customer)