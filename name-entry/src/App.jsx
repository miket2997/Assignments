import React from 'react'


function App() {
 const [formData, setFormData] = React.useState({name: ""});
 const [runningList, setRunningList] = React.useState("");

  function handleChange(event){
    const {name, value} = event.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }


  function handleSubmit(event){
    event.preventDefault()
    setRunningList(prevList => {
      return [
        ...prevList,
        <li className='name--list'>{formData.name}</li>
      ]
    })
    setFormData({name: ""})
    
  }

  return(
    <div>
      <h1 className='title'>Name Entry</h1>
      <form onSubmit={handleSubmit} className="form">
        <input 
          type="text"
          name='name'
          onChange={handleChange}
          value={formData.name}
          placeholder="Name"
          className='input'
        />
        <h1 className='name--h1'>{formData.name}</h1>
        <button className='btn'>Submit</button>
      </form>
      <ol className='ordered--list'>
        {runningList}
      </ol>
    </div>
  )
}

export default App
