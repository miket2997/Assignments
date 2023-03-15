import React from "react";
import Comment from "./Comment";

export default function CommentList(props){
    const { comments } = props;
    return (
        <>
            {comments.map(comment => <Comment key={comment._id} {...comment} issue={comment.issue.title} />)}
        </>
    )
}