const mongoose = require('mongoose')


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/management_product');
        console.log('Successfully!!')
    } catch (error) {
        console.log('Faild')
    }
}

module.exports = { connect };