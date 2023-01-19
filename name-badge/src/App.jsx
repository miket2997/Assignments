import React from "react"


function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    birthPlace: "",
    phoneNumber: "",
    favoriteFood: "",
    aboutYourself: ""
  })

  const [badge, setBadge] = React.useState("")

  function handleChange(event){
    const {name, value} = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }



  function handleSubmit(event){
    event.preventDefault()
    setBadge(prevBadge => {
      return [
        ...prevBadge,
        <div className="badge">
          <h1>Badge:</h1>
          <p className="name--">Name: {formData.firstName} {formData.lastName}</p>
          <p className="email--">Email: {formData.email}</p>
          <p className="birthPlace">Place of birth: {formData.birthPlace}</p>
          <p className="number">Phone Number: {formData.phoneNumber}</p>
          <p className="favFood"> Favorite Food: {formData.favoriteFood}</p>
          <textarea className="comments">{formData.aboutYourself}</textarea>
        </div>
      ]
    })

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phoneNumber: "",
      favoriteFood: "",
      aboutYourself: ""
    })
    
      
  }

  return(
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="main--title">Please Enter Your Information</h1>
        <div className="inputs">
          <input 
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="f--name"
            required={true}
            minLength="3"
          />
          <input 
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required={true}
            minLength="3"
            className="l--name"
          />
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required={true}
            minLength="3"
            className="email"
          />
          <input 
            type="text"
            name="birthPlace"
            placeholder="Place of birth"
            value={formData.birthPlace}
            onChange={handleChange}
            required={true}
            minLength="3"
            className="birth"
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone"
            value={formData.phoneNumber}
            onChange={handleChange}
            required={true}
            minLength="3"
            className="phone"
          />
          <input 
            type="text"
            name="favoriteFood"
            placeholder="Favorite Food"
            value={formData.favoriteFood}
            onChange={handleChange}
            required={true}
            minLength="3"
            className="food"
          />
          <textarea
            value={formData.aboutYourself}
            name="aboutYourself"
            placeholder="Tell us about yourself"
            onChange={handleChange}
            required={true}
            minLength="3"
            className="text--area"
          />
        </div>
        <button className="btn">Submit</button>
      </form>
      <div className="created--badge">{badge}</div>
    </div>
  )
}

export default App
