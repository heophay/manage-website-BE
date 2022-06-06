const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/testdb')
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established!')
})
const app = express()
const port = 3001
app.get('/tin-tuc', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening at https://localhost:${port}`))