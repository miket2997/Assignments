import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Bounty from "./components/Bounty";

function App() {
  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    axios.get("./bounty")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }, [])



  function addBounty(newBounty){
    axios.post("/bounty", newBounty)
      .then(res => {
        setBounties(prevBounty => [
          ...prevBounty,
          res.data
        ])
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId){
    axios.delete(`/bounty/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId){
    axios.put(`/bounty/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  

  return (
    <div className="container">
      <Form submit={addBounty} btnText="Add Bounty" />
      {bounties.map(bounty => <Bounty key={bounty._id} {...bounty} deleteBounty={deleteBounty} editBounty={editBounty}/>)}
    </div>
  )
}

export default App;

