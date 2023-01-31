import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeProvider"


function Nav() {
    
    const {color} = useContext(ThemeContext);

    const styles = {
        light: {
            backgroundColor: "lightblue",
            color: "black"
        },
        dark: {
            backgroundColor: "darkblue",
            color: "white"
        }
    }

    
    
    return (
        <nav className={`${color}-theme nav`} style={color === "light" ? styles.light : styles.dark}>
            <ul>
                <li><a href="#" style={color === "light" ? styles.light : styles.dark}>Home</a></li>
                <li><a href='#' style={color === "light" ? styles.light : styles.dark}>About</a></li>
                <li><a href='#' style={color === "light" ? styles.light : styles.dark}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;