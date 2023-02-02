import React, { useContext } from "react";
import { Context } from "./Context";

export default function UglyList(){
    const {uglyThingList, deleteThing, handleEdit} = useContext(Context)

    const mappedThings = uglyThingList.map(item => {
        return (
            <div key={item._id} className="ugly--thing">
                <img src={item.imgUrl}/>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div className="btn--container">
                    <button className="delete--button" onClick={() => deleteThing(item._id)}>Delete</button>
                    <button className="edit--button" onClick={() => handleEdit(item._id)}>Edit</button>
                </div>
            </div>
        )
    })

    return (
        <div className="list--container">
            {mappedThings}
        </div>
    )
}