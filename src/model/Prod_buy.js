const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Prod_buy = new Schema({
    product_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Product'
    },
    quantity: Number,
})

module.exports = Prod_buy