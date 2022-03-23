// require word common js module

//cjs

const express = require("express")
const connectToMongo = require('./databse/db')

// app config

const app = express();
// calling the mongoconnetion function
connectToMongo()

// middile were for using the json 
app.use(express.json())

// port
const PORT = 8000;

// NAME OF ROUTES
// GET
// POST
// DELETE
// PUT
// PATCH

// ROUTES
// http://localhsot:8000/api/v1/get ---> url

 app.use('/api/v1' ,require("./routes/todoroutes"))


// listener
app.listen(PORT, () => {
    console.log(`application is running on the port ${PORT}`)
})

 