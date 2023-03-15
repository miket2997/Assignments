import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import IssueForm from "./IssueForm";
import UserIssueList from "./UserIssueList";
import CommentList from "./CommentList";

export default function Profile(){
    const {
        user: {
            username
        },
        addIssue,
        issues,
        comments,
        getUserIssues,
        getUserComments
    } = useContext(UserContext);

   
    useEffect(() => {
        getUserIssues()
        getUserComments()
        console.log("Effect")
    }, [getUserIssues, getUserComments]);


    return (
        <div className="profile">
            <div className="user--info">
                <h1>Welcome { username }</h1>
                <br />
                <h3>Fill out form below to add an issue.</h3>
                <IssueForm addIssue={addIssue} />
                <h3 className="your--issues">Your Issues</h3>
                <UserIssueList issues={issues} />
                <h3 className="your--comments">Your Comments</h3>
                <CommentList comments={comments} />
            </div>
        </div>
    )
}

