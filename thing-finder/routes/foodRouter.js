const express = require("express");
const foodRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
];


foodRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})


foodRouter.post("/", (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    inventoryItems.push(newItem);
    res.send(`Succesfully added ${newItem.name} to inventory`)
})

foodRouter.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const foundItem = inventoryItems.find(item => item._id === itemId);
    res.send(foundItem)
})

foodRouter.get("/search/type", (req, res) => {
    const type = req.query.type;
    const filteredItems = inventoryItems.filter(item => item.type === type);
    res.send(filteredItems)
})

foodRouter.get("/search/max", (req, res) => {
    const filteredMaxPrice = inventoryItems.filter(item => item.price <= 800);
    res.send(filteredMaxPrice)
})


foodRouter.get("/search/min", (req, res) => {
    const filteredMinPrice = inventoryItems.filter(item => item.price >= 800);
    res.send(filteredMinPrice)
})


module.exports = foodRouter;

