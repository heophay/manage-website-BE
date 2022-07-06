const mongoose = require('mongoose')

const user = require('./user')
const product = require('./product')
const bill = require('./bill')
const customer = require('./customer')
const pay_item = require('./pay_item')


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/management_product');
        console.log('Successfully!!')
    } catch (error) {
        console.log('Faild')
    }
}

function route(app) {
    app.use('/api/user', user)
    app.use('/api/product', product)
    app.use('/api/bill', bill)
    app.use('/api/customer', customer)
    app.use('/api/payitem', pay_item)
}

module.exports = { connect, route };