import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    accountID: "",
    password: ""
  });

  const accountInputs = [
    {
      id: 1,
      name: "accountID",
      type: "text",
      placeholder: "Account ID",
      label: "Account ID"
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password"
    }
  ]

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  };

  const verifyCredentials = (e) => {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={verifyCredentials}>
        <h1 className='title' >Portal ED</h1>
        <p className='caption' id="small">Sign in to your Portal ED account</p>
        {accountInputs.map((input) => (
          <InputField key = {input.id} {...input} value = {credentials[accountInputs.name]} onChange = {onChange}/>
        ))}
        <button className='log-in-button' >Next</button>
        <a className='log-in-link' href='http://localhost:3000/account-recovery/password'>Forgot Account ID or password?</a>
      </form>
    </div>
  )
}

export default Login