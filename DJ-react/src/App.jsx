import React from "react"
import Buttons from "./components/Buttons"
import Squares from "./components/Squares"


export default function App(){
  const[colors, setColors] = React.useState(["white", "white", "white", "white"])
  const mappedColors = colors.map((color, index) => {
    return(
      <Squares 
        key={index}
        color={color}
        className="square"
      />
    )
  })

  function smallTime(){
    setColors(() => {
      const newColors = colors.map(color => color === "white" ? "black" : color === "black" ? "white" : "white")
      return newColors
    })
  }

  function party(){
    setColors(prevColor => ["purple", "purple", prevColor, prevColor])
  }

  function proOne(){
    setColors(prevColor => [prevColor, prevColor, "blue", prevColor])
  }

  function proTwo(){
    setColors(prevColor => [prevColor, prevColor, prevColor, "blue"])
  }

  function BigTimeOne(){
    setColors(prevColor => ["green", prevColor, prevColor, prevColor])
  }

  function bigTimeTwo(){
    setColors(prevColor => [prevColor, "yellow", prevColor, prevColor])
  }

  function bigTimeThree(){
    setColors(prevColor => [prevColor, prevColor, "orange", prevColor])
  }

  function bigTimeFour(){
    setColors(prevColor => [prevColor, prevColor, prevColor, "pink"])
  }

  function allBigTime(){
    setColors(["green", "yellow", "orange", "pink"])
  }

  function reset(){
    setColors(["white", "white", "white", "white"])
  }


  return(
    <div className="container">
      <div className="square--buttons">
        {mappedColors}
        <Buttons text="Small Time DJ" handleClick={smallTime} />
        <Buttons text="Party DJ" handleClick={party} />
        <Buttons text="Professional 1" handleClick={proOne} />
        <Buttons text="Professional 2" handleClick={proTwo} />
        <Buttons text="Big Time 1" handleClick={BigTimeOne} />
        <Buttons text="Big Time 2" handleClick={bigTimeTwo} />
        <Buttons text="Big Time 3" handleClick={bigTimeThree} />
        <Buttons text="Big Time 4" handleClick={bigTimeFour}/>
        <Buttons text="All Big Time" handleClick={allBigTime} />
        <Buttons text="Reset" handleClick={reset} />
      </div>
      
    </div>
  )
}