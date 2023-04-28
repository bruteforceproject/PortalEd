import { React, useState } from 'react'
import "../assets/page-styles/log-in.css"
import { useNavigate } from 'react-router-dom'


const NotificationSent = () => {
  const navigate = useNavigate();
  const GoTo = (e) => {
    e.preventDefault();
    navigate("../log-in");
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={GoTo}>
        <h1 className='title' >Portal ED</h1>
        <p className='caption' id="medium-light">A notification was sent to your device to reset your password.</p>
        <p className='caption' id="small">Open the notification sent to your device and click on the link to reset your password.</p>
        <button className='log-in-button'>Log In</button>
      </form>
    </div>
  )
}

export default NotificationSent