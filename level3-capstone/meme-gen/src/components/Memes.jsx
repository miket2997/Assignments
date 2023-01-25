import React from "react";

export default function Memes(props){
    const {topText, bottomText, randomImage, id} = props;

    return (
        <div className="meme--container">
            <img src= {randomImage} className="image--list" />
            <h1 className="list--text top--text">{topText}</h1>
            <h1 className="list--text bottom--text">{bottomText}</h1>
            <div className="buttons">
                <button className="edit--button" onClick={() => props.edit(id)}>Edit</button>
                <button className="delete--button" onClick={() => props.delete(id)}>Delete</button>
            </div>
        </div>

    )
}