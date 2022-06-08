const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const Product = require('./model/Product')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const db = require('./api')
db.connect()

// app.use('/api/posts', posts)
const port = 3000
app.get('/', (req, res) => (

    Product.find({}, function(err, products) {
        if (!err) {
            res.json(products)
        } else {
            res.status(400).json({ error: "ERROR!!"})
        }
    })

))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))