const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./routes/api')

db.connect()
const app = express()

app.use(bodyParser.json())
app.use(cors())

const user = require('./routes/api/user')
app.use('/api/user', user)

const product = require('./routes/api/product')
app.use('/api/product', product)

const port = 3001


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))