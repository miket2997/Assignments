const express = require("express");
const app = express();


app.use(express.json())

app.use("/villains", require("./routes/villainRouter.js"))

app.use("/food", require("./routes/foodRouter.js"))


app.listen(9000, () => {
    console.log("App is running on port 9000")
})