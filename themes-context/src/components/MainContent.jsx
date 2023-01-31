import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeProvider"

function MainContent() {
    
    const {color, toggleTheme} = useContext(ThemeContext)

    const btnStyle = {
        light: {
            backgroundColor: 'darkgreen'
        }, 
        dark: {
            backgroundColor: "lightgreen"
        }
        
    }

    const h1Style = {
        light: {
            color: "black"
        },
        dark: {
            color: "orange"
        }
    }
    
    return (
        <div className= {`${color}-theme main`}>
            <h1 style={color === "light" ? h1Style.light : h1Style.dark}>Click the button below to change the theme.</h1>
            <br />
            <button style={color === "light" ? btnStyle.light : btnStyle.dark} className='toggleBtn' onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default MainContent;