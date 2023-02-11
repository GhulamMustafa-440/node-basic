const mongoose = require("mongoose")

// connection string
const mongoURI = "mongodb+srv://ghulamMustafa123:ghulamMustafa123@cluster0.dgh2vdr.mongodb.net/ridesApp?retryWrites=true&w=majority"

// connect to mongodb
mongoose.connect(mongoURI)

module.exports = mongoose