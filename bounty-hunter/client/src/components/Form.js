import React, { useState } from "react";


export default function Form(props){
    const [inputs, setInputs] = useState({
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: props.living || false,
        bountyAmount: props.bountyAmount || 0,
        type: props.type || ""
    });


    function handleChange(event){
        const {name, value, type, checked} = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: inputValue
        }))
    }




    function handleSubmit(event){
        event.preventDefault();
        props.submit(inputs, props._id)
        setInputs({
            firstName: "",
            lastName: "",
            living: false,
            bountyAmount: 0,
            type: "",
        })
        props.editState(false)
    }

    return (
        <form className="main--form" onSubmit={handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input 
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input 
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Sith or Jedi"
            />
            <label className="check">
                Alive
                <input 
                    type="checkbox"
                    name="living"
                    checked={inputs.living}
                    onChange={handleChange}
                />
            </label>

            <button className="form--btn">{props.btnText}</button>
        </form>
    )
}
