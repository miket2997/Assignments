import React from "react";
import Pet from "./Pet";

export default function Friend(props){
    const pets = props.friend.pets.map(pet => {
        return(
            <Pet
                key = {pet.name}
                pet = {pet}
            />
        )
    })
    return(
        <div className="friend--container">
            <h1>Name of Owner: {props.friend.name}</h1>
            <h2>{props.friend.name}'s Age: {props.friend.age}</h2>
            <h3>{props.friend.name}'s Pets:</h3>
            <ul>
                <li className="list">{pets}</li>
            </ul>
        </div>
    )
}