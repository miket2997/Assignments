const express = require("express");
const bountyRouter = express.Router();
const BountyModel = require("../models/bountyModel.js");



bountyRouter.get("/", (req, res, next) => {
    BountyModel.find((err, bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})


    
bountyRouter.post("/", (req, res, next) => {
        const newBounty = new BountyModel(req.body);
        newBounty.save((err, bounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(bounty)
        })
    })


bountyRouter.get("/:bountyId", (req, res, next) => {
    BountyModel.findById({ _id: req.params.bountyId }, (err, bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

bountyRouter.delete("/:bountyId", (req, res, next) => {
    BountyModel.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedBounty.firstName} ${deletedBounty.lastName} bounty`)
    })
})

bountyRouter.put("/:bountyId", (req, res, next) => {
    BountyModel.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})



    module.exports = bountyRouter