const express = require('express')
const Customer = require('../../model/Customer')
const router = express.Router();

//GET
router.get('/',(req, res) => {
    try {
        Customer.find({}, (err, customers) => {
            res.json({
                status: 200,
                customers: customers
            })     
        })
    } catch (err) {
        console.log(err)
    }
})

router.get('/:phone',(req, res) => {
    try {
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
    } catch (err) {
        console.log(err)
    }
})

//PUT
router.put('/:id', (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
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
    try {
        var data = req.body
        Customer.create(data, (err, newCustomer) => {
            if (err) throw err;
            res.json({
                status: 200,
                message: 'Created Customer',
                customer: newCustomer,
            })
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router