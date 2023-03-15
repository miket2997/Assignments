const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    postedAt: {
        type: Date,
        default: Date.now
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});



module.exports = mongoose.model("Comment", commentSchema);

