import express from "express";
const router = express.Router();
import Todo from "../MODELS/todo.js";

router.get("/", async(req,res)=>{
    res.send("API is working");
})

router.post("/create", async(req,res) => {
    const { title, description } = req.body;
    try {
        const newTodo = new Todo({
            title,
            description,
        })
        await newTodo.save();
    } catch (error) {
        console.log(error);
    }
    res.send("Todo created");
})

router.get("/alltodos", async(req,res)=>{
    const todos = await Todo.find();
    res.json(todos);
})

router.get("/findtodo/:id", async(req,res)=>{
    const uid = req.params.id;
    const todo = await Todo.findById(uid);

    if(!todo){
        res.status(404).json({
            message: "Todo not found"
        });
    }


    res.json(todo);
})

router.put("/update/:id", async(req,res) => {
    const {title, description} = req.body;

    const uid = req.body.id;
    const todo = await Todo.findOneAndUpdate(uid, {
        title,
        description,
    },{
        new: true,
    })

    if(!todo){
        res.status(404).json({
            message: "Todo not found"
        })
    }

    res.json({
        todo,
        message: "Todo updated"
    })
})


router.delete("/delete/:id", async(req,res) => {
    const uid = req.params.id;
    const todo = await Todo.findByIdAndDelete(uid);

    if(!todo){
        res.status(404).json({
            message: "Todo not found"
        })
    }

    res.json({
        message: "Todo deleted",
        todo
    })
})


export default router;