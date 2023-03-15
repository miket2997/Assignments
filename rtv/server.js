const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt");

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb+srv://miket2997:Xq3xuYIBnZGXPiv0@cluster0.wawrkog.mongodb.net/rtv?retryWrites=true&w=majority')
.then(() => console.log("Connected to DB"))

app.use("/auth", require("./routes/authRouter.js"));
app.use("/api", expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}));
app.use("/api/issues", require("./routes/issueRouter.js"));
app.use("/api/comments", require("./routes/commentRouter.js"));


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


app.listen(8000, () => {
    console.log("App is running on port 8000")
})

