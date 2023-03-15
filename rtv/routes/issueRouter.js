const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issueModel.js");
const User = require("../models/userModel.js");
const Comment = require("../models/commentModel.js");

// Get all issues
issueRouter.get("/", (req, res, next) => {
    Issue.find({})
    .populate({
        path: 'comments',
        populate: {
            path: "user",
            select: "username"
        }
    })
    .populate({
        path: "user",
        select: "username"
    })
    .then(issues => {
        return res.status(200).send(issues)
    })
    .catch(err => {
        console.log(err)
        res.status(500)
        return next(err)
    })
});


// Add an issue
issueRouter.post("/", (req, res, next) => {
    const userId = req.auth._id;
    req.body.user = userId;
    const newIssue = new Issue(req.body);
    newIssue.save()
    .then(savedIssue => {
        return User.findOneAndUpdate({_id: userId}, {$push: {issues: savedIssue._id}}, {new: true})
        .then(() => {
            return res.status(201).send(savedIssue)
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500)
        return next(err)
    })
});

// Upvote an issue
issueRouter.post("/:issueId/upvote", (req, res, next) => {
    const userId = req.auth._id
    Issue.findOne({ _id: req.params.issueId })
    .then(issue => {
        if(issue.upvotes.includes(userId)){
            return res.status(400).send("You have already upvoted this issue")
        } else if(issue.downvotes.includes(userId)){
            issue.downvotes.pull(userId)
            issue.upvotes.push(userId)
        } else {
            issue.upvotes.push(userId)
        }
        issue.save()
        .then(() => {
            return res.status(201).send("Successfully upvoted")
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

// Remove upvote
issueRouter.delete("/:issueId/upvote", (req, res, next) => {
    const userId = req.auth._id
    Issue.findOne({ _id: req.params.issueId })
    .then(issue => {
        if(!issue.upvotes.includes(userId)){
            return res.status(400).send("You have not upvoted this issue")
        }
        issue.upvotes.pull(userId)
        issue.save()
        .then(() => {
            return res.status(200).send("Successfully removed upvote")
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


// Downvote an issue
issueRouter.post("/:issueId/downvote", (req, res, next) => {
    const userId = req.auth._id
    Issue.findOne({ _id: req.params.issueId })
    .then(issue => {
        if(issue.downvotes.includes(userId)){
            return res.status(400).send("You have already downvoted this issue")
        } else if(issue.upvotes.includes(userId)){
            issue.upvotes.pull(userId)
            issue.downvotes.push(userId)
        } else {
            issue.downvotes.push(userId)
        }
        issue.save()
        .then(() => {
            return res.status(201).send("Successfully downvoted")
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

// Remove downvote
issueRouter.delete("/:issueId/downvote", (req, res, next) => {
    const userId = req.auth._id;
    Issue.findOne({ _id: req.params.issueId })
    .then(issue => {
        if(!issue.downvotes.includes(userId)){
            return res.status(400).send("You have not downvoted this issue")
        }
        issue.downvotes.pull(userId)
        issue.save()
        .then(() => {
            res.status(200).send("Successfully removed downvote")
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
})


// Get a user's issues
issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.auth._id })
    .then(issues => {
        return res.status(200).send(issues)
    })
    .catch(err => {
        console.log(err)
        res.status(500)
        return next(err)
    })
});

// Get single issue
issueRouter.get("/:issueId", (req, res, next) => {
    Issue.findOne({ _id: req.params.issueId })
    .populate('comments')
    .then(issue => {
        return res.status(200).send(issue)
    })
    .catch(err => {
        console.log(err)
        res.status(500)
        return next(err)
    })
});

// Delete an issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete({ _id: req.params.issueId })
    .then(deletedIssue => {
        Comment.deleteMany({issue: req.params.issueId})
        .then(() => {
            return res.status(200).send(`Successfully deleted ${deletedIssue.title}`)
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

// Update an issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        req.body,
        { new: true }
    )
    .then(updatedIssue => {
        return res.status(201).send(updatedIssue)
    })
    .catch(err => {
        console.log(err)
        res.status(500)
        return next(err)
    })
})




module.exports = issueRouter;

