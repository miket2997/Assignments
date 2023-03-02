const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");


app.use(express.json());
app.use(morgan('dev'));


app.use("/inventory", require("./routes/inventoryRouter.js"));


mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/crudstore', () => {
    console.log("Connected to DB")
});




app.use((err, req, res, next) => {
    console.log(err)
    res.send({errMsg: err.message})
})








app.listen(8000, () => {
    console.log("App is running on port 8000")
})