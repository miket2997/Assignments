import React, { useState } from "react";
import Form from "./Form";

export default function Bounty(props){
    const [isEditing, setIsEditing] = useState(false);
    

    return (
        <div className="bounty--container">
            {!isEditing && (
                <>
                    <h1>{props.firstName} {props.lastName}</h1>
                    <h2>Alive: {props.living ? "Yes" : "No"}</h2>
                    <h2>Bounty Amount : ${props.bountyAmount}</h2>
                    <h2>{props.type}</h2>
                    <button onClick={() => props.deleteBounty(props._id)}>Delete</button>
                    <button onClick={() => setIsEditing(prevEdit => !prevEdit)}>Edit</button>
                </>
            )}
            {isEditing && (
                <>
                    <Form 
                        key={props._id}
                        firstName={props.firstName}
                        lastName={props.lastName}
                        living={props.living}
                        bountyAmount={props.bountyAmount}
                        type={props.type}
                        _id={props._id}
                        submit={props.editBounty}
                        btnText="Submit Edit"
                        editState={setIsEditing}
                    />
                    <button onClick={() => setIsEditing(prevEdit => !prevEdit)}>Close</button>
                </>
            )}
            
        </div>
    )
}

