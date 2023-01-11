import React from "react"
export default function Buttons(props){
    return(
        <button className="buttons" onClick={props.handleClick}>{props.text}</button>
    )
}