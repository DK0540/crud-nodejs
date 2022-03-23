const express = require("express")
const Todo = require('../models/Todo')
// for routing 
const router = express.Router()
// routes no 1 for getting the aTodos  localhost:8000/api/v1/gettodo
router.get('/gettodo',(req, res) => {
    try {
        Todo.find().then(data => {
            res.json({ message: "Success", data: data });
         })
         
     } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
     }
})

// routes no 2 for creating a todo List localhost:8000/api/v1/createtodo
// 

router.post('/createtodo', (req, res) => {
    try {
        const todo = new Todo({
            todo: req.body.todo
        })

        todo.save().then(data => {
            res.json({ message: "Success", data: data });
        })
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    
})

// routes no 3 for updating a todo list
router.delete('/update/:id', (req, res) => {
    try {
       
            

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// routes no 4 to deleting the todo lsit
// router.get('/deletetodo/:id',(req, res) => {
//     try {
//         Todo.findByIdAndDelete(req.params.id).then(data => {
//             res.status(200).json({ massage: "note has been deleted", data: data })
//          })
         
//      } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//      }
// })
router.delete('/deletetodo/:id', (req, res) => {
    try {
           Todo.findByIdAndDelete(req.params.id).then(data => {
            res.status(200).json({ massage: "note has been deleted", data: data })
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router;