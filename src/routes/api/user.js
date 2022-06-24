const express = require('express')
const User = require('../../model/User')
const router = express.Router()

//GET

// Get list user
router.get('/', (req, res) => {
    User.find({}, (err, user) => {
        if (!err) res.json(user)
        else res.status(400).json({error: 'ERROR!!'})
    })
})

router.get('/employee', (req, res) => {
    User.find({
        $and:[
            {isAdmin: false}
        ]
    }, (err, user) => {
        if (!err) res.json(user)
        else res.status(400).json({error: 'ERROR!!'})
    })
})

//Get 1 user
router.get('/:id', (req, res) => {
    const { id } = req.params 
    User.findOne({
        _id: id
    }, (err, user) => {
        try {
            res.json({
                status: 200,
                user: user
            })
        } catch (err) {
            console.log(err)
        }
    })
})

//POST
router.put('/:id', (req, res) => {
    const { id } = req.params
    const data = req.body
    // Update infomation user
    User.updateOne({
        _id: id
    },data ,(err, user) => {
        try {
            res.json({
                status: 200,
                message: "Updated Information",
                user: user
            })
        } catch (err) {
            console.log(err)
        }
    })
})

// Create user
router.post('/create', (req,res) => {
    const data = req.body
    User.create(data, (err, newUser) => {
        if (err) throw err
        res.json({
            status: 200,
            message: "Created user",
            user: newUser,
        })
    })
})

// Login
router.post('/login', (req, res) => {
    let data = req.body
    User.findOne({
        $and: [
            {
                username: data.username,
                password: data.password,
            }
        ]
    }, (err, user) => {
        if (err) throw err;
        res.json({
            status: 200,
            message: "OK",
            user
        })
    })
})
module.exports = router;
