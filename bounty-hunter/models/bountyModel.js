const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountyAmount: Number,
    type: String
});


module.exports = mongoose.model("BountyModel", bountySchema)