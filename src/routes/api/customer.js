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

router.get('/:phone',(req, res) => {
    const phone = req.params.phone
    Customer.find({
        phone: phone
    }, (err, customers) => {
        try {
            if (customers) {
                res.json({
                    status: 200,
                    customers: customers[0]
                })
            } else {
                res.send('no data')
            }         
        } catch (err) {
            console.log(err)
        }
        
    })
})

//PUT
router.put('/:id', (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        Customer.findOne({
            $and: [
                {
                    phone: data.name,
                }
            ]
        }, (err, customer) => {
            if (err) throw err;
            if (!customer) {
                createUser(data)
            }
        })
    } catch (error) {
        console.log(error)
    }
})

//POST
router.post('/create', (req, res) => {
    var data = req.body
    Customer.create(data, (err, newCustomer) => {
        if (err) throw err;
        res.json({
            status: 200,
            message: 'Created Customer',
            customer: newCustomer,
        })
    })
})

module.exports = router