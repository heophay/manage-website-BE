const express = require('express')
const Bill = require('../../model/Bill')
const router = express.Router();
const { createPayItem } = require('./pay_item')

//GET
router.get('/',(req, res) => {
    try {
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
    } catch (err) {
        console.log(err)
    }
})

router.get('/:id_user',(req, res) => {
    try {
        const { id_user } = req.params
        Bill.find({
            $and: [
                {
                    id_user: id_user
                }           
            ]
        }, (err, bills) => {
            try {
                res.json({
                    status: 200,
                    bills: bills
                })
            } catch (err) {
                console.log(err)
            }
            
        })
    } catch (err) {
        console.log(err)
    }
})

//POST
router.post('/create', (req, res) => {
    try {
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
    } catch (err) {
        console.log(err)
    }
})


module.exports = router