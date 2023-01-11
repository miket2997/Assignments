import React from "react";

export default function Pet(props){
    return(
        <div className="pet--main">
            <img src={props.pet.imgUrl}/>
            <div className="pet--container">
                <h2 className="pet--name">Name: {props.pet.name}</h2>
                <h2 className="pet--breed">Breed: {props.pet.breed}</h2>
            </div>
        </div>
    )
}