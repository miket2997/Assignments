import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){
    const { logout, token } = props;
    return (
        <nav className="navbar">
            { token && <Link to="/profile">Profile</Link>}
            { token && <Link to="/issues">Issues</Link>}
            { token && <button className="logout--btn" onClick={logout}>Logout</button>}
        </nav>
    )
}