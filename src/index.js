const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./routes/api')

db.connect()
const app = express()

app.use(bodyParser.json())
app.use(cors())

const user = require('./routes/api/user')
const product = require('./routes/api/product')
const bill = require('./routes/api/bill')
const customer = require('./routes/api/customer')
const pay_item = require('./routes/api/pay_item')

app.use('/api/user', user)
app.use('/api/product', product)
app.use('/api/bill', bill)
app.use('/api/customer', customer)
app.use('/api/payitem', pay_item)

const port = 3001
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))