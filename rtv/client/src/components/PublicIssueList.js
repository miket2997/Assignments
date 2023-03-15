import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import CommentForm from "./CommentForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


export default function PublicIssueList(){
   
    const { 
        allIssues, 
        getAllIssues, 
        deleteComment,
        upVote,
        downVote,
        user,
        deleteUpVote,
        deleteDownVote
    } = useContext(UserContext);

    const [toggleShowForm, setToggleShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedIssueId, setSelectedIssueId] = useState(null);
    const [selectedCommentId, setSelectedCommentId] = useState(null);

    useEffect(() => {
        getAllIssues()
        console.log("Effect")
    }, [getAllIssues]);

    function toggleCommentForm(issueId){
       if(toggleShowForm && selectedIssueId === issueId){
        setToggleShowForm(false)
        setSelectedIssueId(null)
       } else {
        setToggleShowForm(true)
        setSelectedIssueId(issueId)
       }
    };

    function toggleEditForm(issueId, commentId){
        const comment = allIssues.find(issue => issue._id === issueId).comments.find(comment => comment._id === commentId)
        if(comment.user._id === user._id){
            if(commentId === selectedCommentId && issueId === selectedIssueId){
                setIsEditing(prev => !prev);
            } else {
                setIsEditing(true);
                setSelectedCommentId(commentId);
                setSelectedIssueId(issueId);
            }
        }
        
    }
    

    function handleDelete(commentId){
        deleteComment(commentId)
    };

    function handleUpVote(issueId){
        const issue = allIssues.find(issue => issue._id === issueId);
        const userUpVote = issue.upvotes.find(userId => userId === user._id);
        if(userUpVote){
            deleteUpVote(issueId)
        } else {
            upVote(issueId)
        }
    };

    function handleDownVote(issueId){
        const issue = allIssues.find(issue => issue._id === issueId);
        const userDownVote = issue.downvotes.find(userId => user._id === userId);
        if(userDownVote){
            deleteDownVote(issueId)
        } else {
            downVote(issueId)
        }
    };
    

    function getVoteClassName(issueId, voteType){
        const issue = allIssues.find(issue => issue._id === issueId);
        const userUpVote = issue.upvotes.find(userId => userId === user._id);
        const userDownVote = issue.downvotes.find(userId => userId === user._id);
        if(userUpVote && voteType === "up"){
            return "thumbs--up"
        } else if(userDownVote && voteType === "down"){
            return "thumbs--down"
        } else {
            return "voted";
        }
    };
    

    function formatDate(dateString){
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true
        })
    }
    
    return (
        <div className="public--container">
            <h1 className="issues--h1">Issues</h1>
            {allIssues.sort((a, b) => b.upvotes.length - a.upvotes.length).map(issue => (
                <div className="issue--container" key={issue._id}>
                    <div className="issue--title">
                        <h1>{issue.title}</h1>
                        <p>By: {issue.user.username}</p>
                        <p>Upvotes: {issue.upvotes.length}</p>
                        <p>Downvotes: {issue.downvotes.length}</p>
                        <div className="vote--btns">
                            <button onClick={() => handleUpVote(issue._id)} className={getVoteClassName(issue._id, "up")}>
                                <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                            </button>
                            <button onClick={() => handleDownVote(issue._id)} className={getVoteClassName(issue._id, "down")}>
                                <FontAwesomeIcon icon={faThumbsDown} size="2x" />
                            </button>
                        </div>
                    </div>
                    <p>{issue.description}</p>
                    <br />
                    <button className="toggle--comment" onClick={() => toggleCommentForm(issue._id)}>
                        { toggleShowForm && selectedIssueId === issue._id ? "Cancel" : "Add comment"}
                    </button>
                    { toggleShowForm && !isEditing && selectedIssueId === issue._id && <CommentForm allIssues={allIssues} issueId={issue._id} setToggleShowForm={setToggleShowForm} />}
                    { issue.comments.length > 0 && <h2 className="comments--h2">Comments</h2>}
                    {issue.comments.map(comment => (
                        <div className="comment--container" key={comment._id}>
                            <small>By: {comment.user.username}</small>
                            <small>Posted: {formatDate(comment.postedAt)}</small>
                            <p>{comment.text}</p>
                            { user._id === comment.user._id && (
                                <button className="edit--comment" onClick={() => toggleEditForm(issue._id, comment._id)}>
                                    {!isEditing ? "Edit comment" : "Cancel"}
                                </button>)}
                            {isEditing && selectedIssueId === issue._id && selectedCommentId === comment._id && (
                                 <CommentForm 
                                    allIssues={allIssues} 
                                    issueId={issue._id} 
                                    commentId={comment._id} 
                                    setToggleShowForm={setToggleShowForm}
                                    setIsEditing={setIsEditing}
                                />
                            )}
                        {comment.user._id === user._id && <button className="delete--comment" onClick={() => handleDelete(comment._id)}>Delete comment</button>}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

