const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    issues: [{
        type: Schema.Types.ObjectId,
        ref: "Issue"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
});


usersSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
});

usersSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        return callback(null, isMatch)
    })
};


usersSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}


module.exports = mongoose.model("User", usersSchema)

