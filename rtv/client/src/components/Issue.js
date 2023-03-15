import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import IssueForm from "./IssueForm";

export default function Issue(props){
    const { title, description, issueId } = props;
    const { deleteIssue, editIssue } = useContext(UserContext);
    const [selectedIssueId, setSelectedIssueId] = useState(null);
    const [toggleShowForm, setToggleShowForm] = useState(false);

    function handleIssueDelete(issueId){
        deleteIssue(issueId)
    };

    function toggleEditIssue(issueId){
        if(toggleShowForm && selectedIssueId === issueId){
            setToggleShowForm(false)
            setSelectedIssueId(null)
        } else {
            setToggleShowForm(true)
            setSelectedIssueId(issueId)
        }
    }

    return (
        <div className="issue">
            <h1>{ title }</h1>
            <p>{ description }</p>
            <button className="delete--issue" onClick={() => handleIssueDelete(issueId)}>Delete Issue</button>
            <button className="edit--issue" onClick={() => toggleEditIssue(issueId)}>{ toggleShowForm ? "Cancel": "Edit issue" }</button>
            { toggleShowForm && (
                <IssueForm 
                    editIssue={editIssue} 
                    issueId={issueId} 
                    setToggleShowForm={setToggleShowForm} 
                    title={title} 
                    description={description} 
                />
            )} 
        </div>
    )
}