import React from "react"
import DiceBox from "./components/DiceBox"


function App(){
  const[numbers, setNumbers] = React.useState([null, null, null, null, null]);

  function newNumbers(){
    setNumbers([null, null, null, null, null])
  }
  


  return(
    <div className="main--container">
      <div className="dice--container">
        <DiceBox />
        <DiceBox />
        <DiceBox />
        <DiceBox />
        <DiceBox />
      </div>
      <div>
        <button className="btn" onClick={newNumbers}>Get new numbers</button>
      </div>
    </div>
  )
}

export default App
