const express = require('express')
const Product = require('../../model/Product')
const router = express.Router();


//POST
router.post('/create', (req, res) => {
    var data = req.body
    Product.create(data, (err, newProd) => {
        if (err) throw err;
        res.json({
            status: 200,
            message: 'Created',
            product: newProd,
        })
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        Product.updateOne({
            _id: id
        }, data, (err, updateProd) => {
            if (err) throw err;
            res.json({
                status: 200,
                message: "Updated Product",
                product: updateProd,
            })
        })
    } catch (error) {
        console.log(error)
    }
})
//DELETE
router.delete('/:id', (req, res) => {
    let { id } = req.params
    Product.deleteOne({
        _id: id
    }, (err) => {
        try {
            res.json({
                status: 200,
                message: "Deleted"
            })
        } catch (err) {
            console.log(err)
        }
    })
})

// GET
router.get('/:id', (req, res) => {
    const { id } = req.params
    Product.findOne({
        _id: id
    }, (err, product) => {
        try {
            res.json({
                status: 200,
                message: "Get completed",
                product: product
            })
        } catch (err) {
            console.log(err)
        }
    })
})

router.get('/', (req, res) => (
    Product.find({}, function(err, products) {
        if (!err) {
            res.json(products)
        } else {
            res.status(400).json({ error: "ERROR!!"})
        }
    })
))

module.exports = router;