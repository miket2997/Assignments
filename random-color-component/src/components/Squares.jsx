import React from "react"
export default function Squares (props){
    console.log(props)
        return(
            <div className = "square" style={props.style}></div>
        )
    }