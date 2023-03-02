const { response } = require("express");
const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

const todos = [
    {
        name: "Project",
        description: "Get project done",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Gym",
        description: "Lift weights",
        completed: false,
        _id: uuidv4()
    }
];


app.get("/todo", (req, res) => {
    res.send(todos)
})

app.post("/todo", (req, res) => {
    const newTodo = req.body;
    newTodo._id = uuidv4();
    todos.push(newTodo);
    res.send(`Successfully added ${newTodo.name} to database`)
})


app.get("/todo/:todoId", (req, res) => {
    const todoId = req.params.todoId;
    const foundTodo = todos.find(todo => todo._id === todoId);
    res.send(foundTodo)
})


app.delete("/todo/:todoId", (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todo => todo._id === todoId);
    todos.splice(todoIndex, 1);
    res.send("Successfully deleted todo")
})


app.put("/todo/:todoId", (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todo => todo._id === todoId);
    const updatedTodo = Object.assign(todos[todoIndex], req.body);
    res.send(updatedTodo)
})



app.listen(5000, () => {
    console.log("App is running on port 5000")
})