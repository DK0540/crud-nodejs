const mongoose = require("mongoose")

// mongoURI
const mongoURi = "mongodb://localhost:27017/vishwa?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

// connection making
const connectToMongo = () => {
    mongoose.connect(mongoURi, () => {
        console.log("mongodb is connected")
    })
}
module.exports = connectToMongo;
 