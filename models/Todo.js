// const mongoose = require("mongoose")

// const { Schema } = mongoose;

// const todoSchema = new Schema({
//     todo: {
//         tpye: String,
     
//      }
// })
// module.exports = mongoose.model("crud",todoSchema)
 
 

const mongoose = require("mongoose")

const { Schema } = mongoose;

const todoSchema = new Schema({
    todo: {
        type: String,
     
    }
})
module.exports = mongoose.model("crud",todoSchema)
