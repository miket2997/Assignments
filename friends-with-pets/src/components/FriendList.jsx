import React from "react";
import Friend from "./Friend";
import data from "../Data";

export default function FriendList(){
    const friends = data.map(friend => {
        return(
            <Friend
                key = {friend.name}
                friend = {friend}
            />
        )
    })
    return(
        <div>
            {friends}
        </div>
    )
}