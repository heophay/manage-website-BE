const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./routes/api')

const app = express()
app.use(bodyParser.json())
app.use(cors())

db.connect()
db.route(app)

const port = 3001
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))