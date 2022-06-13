const express = require('express')
const Payitem = require('../../model/Pay_item')
const router = express.Router();

router.post('/create', (req, res) => {
    const data = req.body
    Payitem.create(data, (err, newPayitem) => {
        res.json({
            status: 200,
            message: "Created Pay Item",
            Payitem: newPayitem
        })
    })    
})

module.exports = router