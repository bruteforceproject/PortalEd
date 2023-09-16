import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate } from 'react-router-dom'

const PasswordRecovery = () => {
  const navigate = useNavigate();
  
  const [accountID, setAccountID] = useState({
    accountID: ""
  });

  const accountInput = [
    {
      id: 1,
      name: "accountID",
      type: "text",
      placeholder: "Account ID",
      label: "Account ID"
    },
  ]

  const onChange = (e) => {
    setAccountID({...accountID, [e.target.name]: e.target.value})
  };

  const verifyPhoneNumber = (e) => {
    e.preventDefault();
    navigate("../account-recovery/verify")
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={verifyPhoneNumber}>
        <h1 className='title' id='small'>Portal ED</h1>
        <p className='caption' id="medium">Trouble signing in?</p>
        {accountInput.map((input) => (
          <InputField key = {input.id} {...input} value = {accountID[accountInput.name]} onChange = {onChange}/>
        ))}
        <button className='log-in-button' >Next</button>
        <a className='log-in-link' href='http://localhost:3000/account-recovery/account-id'>I don't know my Account ID</a>
      </form>
    </div>
  )
}

export default PasswordRecovery