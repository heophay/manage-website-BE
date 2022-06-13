const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bill = new Schema({
    datetime: String,
    total: Number,
    id_user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    id_customer: {
        type: Schema.Types.ObjectId,
        ref: 'customers'
    }
})

module.exports = mongoose.model('Bill', Bill)