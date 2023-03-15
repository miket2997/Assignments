import React, { useState, useEffect } from "react";

export default function IssueForm(props){
    const { addIssue, editIssue, issueId, setToggleShowForm } = props;

    const [inputs, setInputs] = useState({
        title: "",
        description: ""
    });

    useEffect(() => {
        if (issueId) {
            setInputs({
                title: props.title,
                description: props.description,
            });
        }
    }, [props, issueId]);

    function handleChange(event){
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    };

    function handleSubmit(event){
        event.preventDefault()
        if(issueId){
            editIssue(issueId, inputs)
            setToggleShowForm(false)
        } else {
            addIssue(inputs)
            setInputs({
                title: "",
                description: ""
            })
        }
        
    };

    const { title, description } = inputs;

    return (
        <form className="issue--form" onSubmit={handleSubmit}>
            { !issueId && <label style={{color: "red"}}>*Both fields are required.</label>}
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title" 
            />
            <textarea
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"
                style={{resize: "none"}}
                className="issue--text--area" 
            />
            <button>{issueId ? 'Update Issue' : 'Add Issue'}</button>
        </form>
    )
}
