import './App.css';

import Card from "./Card"

function App() {
  let data = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "Maine",    price: 1200,
      timeToGo: "Fall"
    },{
      place: "Alaska",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]
  
  const vacations = data.map(item => {
    return(
      <Card 
        key={item.place}
        place={item.place}
        price={item.price}
        timeToGo={item.timeToGo}
        />
    )
  })
  return(
    <div>
      <h1 className='title'>Vacation Destinations</h1>
      {vacations}
    </div>
  )
}

export default App;
