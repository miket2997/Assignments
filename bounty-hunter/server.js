const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");


app.use(express.json());
app.use(morgan('dev'));

app.use("/bounty", require("./routes/bountyRouter.js"))

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/bounty', () => {
    console.log("Connected to DB")
})


app.use((err, req, res, next) => {
    console.log(err)
    res.send({errMsg: err.message})
})


app.listen(7000, () => {
    console.log("App is running on Port 7000")
})