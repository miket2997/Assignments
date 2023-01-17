import React from "react";

export default function DiceBox(){
    const getRandomNumber = Math.floor(Math.random() * 6) + 1;

    return(
        <h1 className="random--number">{getRandomNumber}</h1>
    )
}