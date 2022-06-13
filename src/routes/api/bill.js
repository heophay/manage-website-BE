const express = require('express')
const Bill = require('../../model/Bill')
const router = express.Router();
const { createPayItem } = require('./pay_item')

//GET
router.get('/',(req, res) => {
    Bill.find({}, (err, bills) => {
        try {
            res.json({
                status: 200,
                bills: bills
            })
        } catch (err) {
            console.log(err)
        }
        
    })
})

//POST
router.post('/create', (req, res) => {
    var data = req.body
    data.datetime = new Date().toLocaleString()
    Bill.create(data, (err, newBill) => {
        try {
            res.json({
                status: 200,
                bill: newBill
            })
        } catch (err) {
            console.log(err)
        }
    })
})


module.exports = router