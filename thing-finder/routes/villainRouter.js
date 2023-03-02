const express = require("express");
const villainRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const villains = [
    {name: "Thanos", from: "Marvel", _id: uuidv4()},
    {name: "Voldemort", from: "Harry Potter", _id: uuidv4()},
    {name: "Green Goblin", from: "Spiderman", _id: uuidv4()},
    {name: "Ultron", from: "Marvel", _id: uuidv4()}
];


villainRouter.get("/", (req, res) => {
    res.send(villains)
})

villainRouter.post("/", (req, res) => {
    const newVillain = req.body;
    newVillain._id = uuidv4();
    villains.push(newVillain);
    res.send(`Successfully added ${newVillain.name} to database`)
})


villainRouter.get("/:villainId", (req, res) => {
    const villainId = req.params.villainId;
    const foundVillain = villains.find(villain => villain._id === villainId);
    res.send(foundVillain)
})


villainRouter.get("/search/from", (req, res) => {
    const from = req.query.from;
    const filteredVillains = villains.filter(villain => villain.from === from);
    res.send(filteredVillains)
})




module.exports = villainRouter