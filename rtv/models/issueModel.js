const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvotes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    downvotes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
});



module.exports = mongoose.model("Issue", issueSchema);

