const express = require('express')
const Payitem = require('../../model/Pay_item')
const Product = require('../../model/Product')
const router = express.Router();

router.get('/',(req, res) => {
    try{
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
    } catch(err) {
        console.log(err)
    }
})

router.get('/:id',(req, res) => {
    try{
        const id_product = req.params.id
        Payitem.find({
            id_product: id_product
        }, (err, obj) => {
            console.log(obj.length)  
        })
    } catch(err) {
        console.log(err)
    }  
})

router.post('/create', (req, res) => {
    try{
        const data = req.body
        Payitem.create(data, (err, newPayitem) => {
            const newPayItems = newPayitem
            res.json({
                status: 200,
                message: "Created Pay Item",
                Payitem: newPayitem
            })
            newPayItems.forEach(function(e) {
                Product.find({
                    _id: e.id_product
                }, (err, product) => {
                    const productTemp = product
                    productTemp[0].quantity = productTemp[0].quantity - e.quantity
                    Product.updateOne({
                        _id: productTemp[0]._id
                    }, productTemp[0], (err, updateProd) => {
                        if (err) throw err;
                        console.log('success')
                    })            
                })        
            })
        })
    } catch(err) {
        console.log(err)
    }   
})

module.exports = router