const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PayitemSchema = new Schema({
    id_bill: {
        type:Schema.Types.ObjectId, 
        ref: 'bills'
    },
    id_product: {
        type: Schema.Types.ObjectId, 
        ref: 'products'
    },
    quantity: Number,
})

module.exports = mongoose.model('PayItem', PayitemSchema)

