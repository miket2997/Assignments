import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function CommentForm(props){
    const initInput = {text: ""};
    const [commentInput, setCommentInput] = useState(initInput);
    const { addComment, editComment } = useContext(UserContext);
    const { issueId, commentId, setToggleShowForm, setIsEditing } = props;

    function handleChange(event){
        const { name, value } = event.target
        setCommentInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    };

    function handleSubmit(event){
        event.preventDefault()
        if(commentId){
            editComment(commentId, commentInput)
            setIsEditing(false)
            setToggleShowForm(false)
        } else {
            addComment(issueId, commentInput)
            setToggleShowForm(false)
        }
        setCommentInput(initInput)
    };

    
    return (
        <form className="comment--form" onSubmit={handleSubmit}>
            <textarea
                name="text"
                value={commentInput.text}
                placeholder="Type your comment here"
                onChange={handleChange}
                className='comment--text--area' 
            />
            <button>{commentId ? "Submit edit" : "Submit comment"}</button>
        </form>
    )
}

