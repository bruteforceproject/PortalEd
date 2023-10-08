import { React, useState } from 'react'
import "../assets/page-styles/log-in.css"
import { useNavigate } from 'react-router-dom'


const YourAccountID = () => {
  const navigate = useNavigate();
  const GoTo = (e) => {
    e.preventDefault();
    navigate("../log-in");
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={GoTo}>
        <h1 className='title' >Portal ED</h1>
        <p className='caption' id="medium-light">Email Found</p>
        <p className='caption' id="small">Your email is: example</p>
        <button className='log-in-button'>Log In</button>
      </form>
    </div>
  )
}

export default YourAccountID