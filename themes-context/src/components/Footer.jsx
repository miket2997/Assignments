import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeProvider"


export default function Footer(){
    const {color} = useContext(ThemeContext);

    const styles = {
        light: {
            backgroundColor: "lightcoral",
            color: "black"
        },
        dark: {
            backgroundColor: "darkred",
            color: "white"
        }
    }

    const btnStyle = {
        light: {
            backgroundColor: 'darkgreen',
            color: "white"
        }, 
        dark: {
            backgroundColor: "lightgreen"
        }
        
    }

    return (
        <div className={`${color}-theme foot`} style={color === "light" ? styles.light : styles.dark}>
            <h2>Enter Email Below to Subsribe to our Newsletter</h2>
            <form>
                <input type="email" />
                <button className='form-btn' style={color === "light" ? btnStyle.light : btnStyle.dark}>Sign up</button>
            </form>
    </div>
    )
}