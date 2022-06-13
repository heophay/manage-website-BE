const express = require('express')
const Customer = require('../../model/Customer')
const router = express.Router();

//GET
router.get('/',(req, res) => {
    Customer.find({}, (err, customers) => {
        try {
            res.json({
                status: 200,
                customers: customers
            })
        } catch (err) {
            console.log(err)
        }
        
    })
})

//POST
router.post('/create', (req, res) => {
    var data = req.body
    Customer.create(data, (err, newCustomer) => {
        if (err) throw err;
        res.json({
            status: 200,
            message: 'Created Customer',
            product: newCustomer,
        })
    })
})
module.exports = router