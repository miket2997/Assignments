import React from "react";
import Gradient from "./Gradient";

function App() {  

  const [colors, setColors] = React.useState({
    color1: "#FF0000",
    color2: "#0000FF"
  })

  const [code, setCode] = React.useState("")
  const [angle, setAngle] = React.useState(0)

  function angleChange(event){
    setAngle(event.target.value)
  }


  function handleChange(event){
    const {name, value} = event.target;
    setColors(prevColor => ({
      ...prevColor,
      [name]: value
    }));
  }

  function handleSubmit(event){
    event.preventDefault()
    const gradient = `background: linear-gradient(${angle}deg, ${colors.color1}, ${colors.color2});
    background: -webkit-linear-gradient(${angle}deg, ${colors.color1}, ${colors.color2});
    background: -moz-linear-gradient(${angle}deg, ${colors.color1}, ${colors.color2});`;
    setCode(gradient)
  }

  const preview = {
    background: `linear-gradient(${angle}deg, ${colors.color1}, ${colors.color2})`,
  }

  return(
    <div className="main--container">
      <h1 className="title">CSS Gradient Generator</h1>
      <br />
      <div className="container">
        <div className="form--container">
        <h2 className="options">Options</h2>
        <form onSubmit={handleSubmit}>
            <label>Color One: </label>
            <label> {colors.color1}</label>
            <input 
                type="color"
                name="color1"
                className="color--inputs"
                onChange={handleChange}
                value={colors.color1}
            />
            <br />
            <br />
            <br />
            <label>Color Two: </label>
            <label> {colors.color2}</label>
            <input 
                type="color"
                name="color2"
                className="color--inputs"
                onChange={handleChange}
                value={colors.color2}
                />
              <br />
              <br />
              <br />
            <label>Angle</label>
            <input 
                type="number"
                name="angle"
                className="angle--input"
                onChange={angleChange}
                value={angle}
            />
            <br />
            <button className="btn">Submit</button>
        </form>
      </div>
      <Gradient>
        <div style={preview} className="preview"></div>
        <textarea readOnly value={code}></textarea>
      </Gradient>
      </div>
    </div>
  )
}

export default App
