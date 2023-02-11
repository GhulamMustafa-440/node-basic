const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RidesSchema = new Schema({
    pickup: {
        lat: Number, long: Number   
    },
    carName: {
        type: String,
        required: true
    },
    destination: {
        lat: Number, long: Number
    }
})

const Rides = mongoose.model('rides',RidesSchema)

module.exports = Rides