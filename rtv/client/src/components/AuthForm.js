import React from "react";


export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        errMsg,
        pText,
        toggleForm,
        labelText,
        btnText,
        inputs: {
            username,
            password
        }
    } = props;


    return (
        <form className="auth--form" onSubmit={handleSubmit}>
            <label>{labelText}</label>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username" 
            />
            <input
                type="text"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password" 
            />
            <button>{ btnText }</button>
            <p className="err--msg" style={{color: "red"}}>{ errMsg }</p>
            <p onClick={ toggleForm } className="toggle--form">{ pText }</p>
        </form>
    )
}