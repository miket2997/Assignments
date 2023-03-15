import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import AuthForm from "./AuthForm";

export default function Auth(){
    const { signup, login, errMsg, resetAuthError } = useContext(UserContext);
    const initInputs = {
        username: "",
        password: ""
    };
    const [inputs, setInputs] = useState(initInputs);
    const [toggle, setToggle] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    };

    function handleSignup(event){
        event.preventDefault()
        signup(inputs)
    };

    function handleLogin(event){
        event.preventDefault()
        login(inputs)
    }

    function toggleForm(){
        setToggle(prev => !prev)
        resetAuthError()
    }

    return (
        <div className="auth--container">
            <h1>Rock the Vote</h1>
            {toggle ? 
            <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText="Sign up"
                    errMsg={errMsg}
                    labelText="Enter information below to sign up."
                    pText="Already a member?"
                    toggleForm={toggleForm}
                />
            </>
            :
            <>
                <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                    errMsg={errMsg}
                    labelText="Please enter login credentials"
                    pText="Not a member?"
                    toggleForm={toggleForm}
                />
            </>
            }
        </div>
    )
}