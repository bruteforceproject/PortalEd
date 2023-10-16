import { React, useState } from 'react'
import "../assets/page-styles/log-in.css"
import { useNavigate, useLocation} from 'react-router-dom'

const YourAccountID = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state.userEmail
  const GoTo = (e) => {
    e.preventDefault();
    navigate("../log-in");
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={GoTo}>
        <h1 className='title' >Portal ED</h1>
        <p className='caption' id="medium-light">Email Found</p>
        <p className='caption' id="small">Your email is: {userEmail}</p>
        <button className='log-in-button'>Log In</button>
      </form>
    </div>
  )
}

export default YourAccountID