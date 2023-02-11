const express = require('express')
const router = express.Router()
const Rides = require('../models/Rides')
const verifyToken = require('../middlewares/verifyToken')

router.get('/getRides', verifyToken, async (req, res) => {
    // get rides from database
   // const rides = await Rides
   // .find({ carName: 'FX', rate: { $gte: 300, $lte: 600 }, badges: { $in: ["Friendly", "Good behaviour"] } })
   // .select({ carName: 1, rate: 1, badges: 1, _id: 0 })

    const rides = await Rides.find().sort({ carName: 1 }).limit(3)

    res.send({ message: 'success', data: rides })
})  

router.post('/addRide', async (req, res) => {
    // add a ride into database

    try {
        const data = req.body
        const ridesData = new Rides(data)
        await ridesData.save()
        res.send({ message: 'Data stored successfully' })
    } catch (e) {
       res.send({error: e.message})
    }

})

router.put('/updateRide/:id', (req, res) => {
    // update a ride into database
    Rides.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (!err) {
            res.send({ message: 'Data updated successfully' })
        } else {
            res.send({ message: err.message })
        }
    })
})

router.put('/deleteRide/:id', (req, res) => {
    // delete a ride from database
    Rides.findByIdAndDelete(req.params.id, {}, (err) => {
        if (!err) {
            res.send({ message: 'Data deleted successfully' })
        } else {
            res.send({ message: err })
        }
    })
})

module.exports = router

/*
    For real time get data:
      1. SocketIO
      2. Pubnub
*/

/*
 In order to get body (data) into backend request:
 1. From the FE , headers: {'Content-Type': 'application/json'},
 2. From the BE , app.use(express.json()) in the main file (index.js)
 */