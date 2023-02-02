import React, {useContext} from "react";
import { Context } from "./Context";



export default function Form(){
    const {uglyThing, handleChange, handleSubmit} = useContext(Context);


    return(
        <form className="form" onSubmit={(event) => handleSubmit(event)}>
            <label>Ugly Thing</label>
            <input 
                type="text"
                name="title"
                placeholder="Title"
                onChange={(event) => handleChange(event)}
                value={uglyThing.title}
            />
            <input 
                type="text"
                name="imgUrl"
                placeholder="Image URL"
                onChange={handleChange}
                value={uglyThing.imgUrl}
            />
            <input 
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                value={uglyThing.description}
            />
            <button className="submit">Submit</button>
        </form>
    )
}

