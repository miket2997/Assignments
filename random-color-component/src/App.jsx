import React from 'react'
import axios from 'axios'
import Squares from './components/Squares'




function App() {
  const [color, setColor] = React.useState("")
  const [boxes, setBoxes] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => setColor(res.data.colors[0].hex))
      .catch(err => console.log(err))
  }, [boxes])

  function newColor(){
    setBoxes(prevColor => ([
        ...prevColor, 
        {boxColor: `#${color}`}
      ])
    )
  }

  const colorElements = boxes.map(box => {
    return <Squares 
              key={Math.random()} 
              style = {{backgroundColor: `${box.boxColor}`}}
            />
  })
  return (
    <div>
      <h1>Random Color Component</h1>
      <button className='btn' onClick={newColor}>Add New Box</button>
      <div className='box--container'>
        {colorElements}
      </div>
    </div>
  )
}

export default App