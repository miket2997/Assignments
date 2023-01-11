import React from "react"
export default function Squares(props){
    const backgrounds = {
        backgroundColor: props.color
    }
    return(
        <div style={backgrounds} className={props.className}></div>
    )
    
}