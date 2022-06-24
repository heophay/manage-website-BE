const express = require('express')
const Payitem = require('../../model/Pay_item')
const router = express.Router();

router.get('/',(req, res) => {
    Payitem.find({}, (err, payitems) => {
        try {
            res.json({
                status: 200,
                payitems: payitems
            })
        } catch (err) {
            console.log(err)
        }
        
    })
})

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