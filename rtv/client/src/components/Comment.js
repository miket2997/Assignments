import React from "react";


export default function Comment(props){
    const { text, issue } = props;
    return (
        <div className="user--comment--container">
            <p>Issue: {issue}</p>
            <p>{text}</p>
        </div>
    )
}