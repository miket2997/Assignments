const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/commentModel.js");
const User = require("../models/userModel.js");
const Issue = require("../models/issueModel.js");

// Get all comments
commentRouter.get("/", (req, res, next) => {
    Comment.find({})
    .populate('user', 'username')
    .then(comments => {
        return res.status(200).send(comments)
    })
    .catch(err => {
        console.log(err)
        res.status(500)
        return next()
    })
})

// Add comment
commentRouter.post("/:issueId", (req, res, next) => {
    const userId = req.auth._id;
    req.body.user = userId;
    req.body.issue = req.params.issueId;
    const newComment = new Comment(req.body);
    newComment.save()
    .then(savedComment => {
        // Push the new comment's ID into the user's comments array
        return User.findOneAndUpdate({_id: userId}, {$push: {comments: savedComment._id}}, {new: true})
            .then(() => {
                // Push the new comment's ID into the issue's comments array
                return Issue.findOneAndUpdate({_id: req.params.issueId}, {$push: {comments: savedComment._id}}, {new: true})
                    .then(() => {
                        return res.status(201).send(savedComment);
                    });
            });
    })
    .catch(err => {
        console.log(err);
        res.status(500);
        return next(err);
    });
});


// Get User's Comments
commentRouter.get("/user", (req, res, next) => {
    Comment.find({ user: req.auth._id} )
    .populate('user', 'username')
    .populate('issue', 'title')
    .then(comments => {
        return res.status(200).send(comments)
    })
    .catch(err => {
        console.log(err)
        res.status(500)
        return next(err)
    })
});

commentRouter.delete("/:commentId", (req, res, next) => {
    Comment.findByIdAndDelete( { _id: req.params.commentId })
    .then(deletedComment => {
        return User.updateOne({ _id: deletedComment.user._id }, { $pull: { comments: deletedComment._id}})
        .then(() => {
            res.status(200).send(`Successfully deleted ${deletedComment.text}`)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
            return next(err)
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500)
        return next(err)
    })
});

commentRouter.put("/:commentId", (req, res, next) => {
    Comment.findByIdAndUpdate(
        { _id: req.params.commentId },
        req.body,
        { new: true }
    )
    .then(updatedComment => {
        return res.status(201).send(updatedComment)
    })
    .catch(err => {
        console.log(err)
        res.status(500)
        return next(err)
    })
})


module.exports = commentRouter;

