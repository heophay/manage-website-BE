const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const router = express.Router();


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/management_product');
        console.log('Successfully!!')
    } catch (error) {
        console.log('Faild')
    }
}

//Get Post
router.get('/', (req, res) => {
    res.send('hello')
})

//Add posts


//Delete posts


module.exports = router;