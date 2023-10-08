import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate } from 'react-router-dom'

const PasswordRecovery = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState({
    email: ""
  });

  const emailInput = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "email",
      label: "email"
    },
  ]

  const onChange = (e) => {
    setEmail({...email, [e.target.name]: e.target.value})
  };

  const verifyPhoneNumber = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/email-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });

      if (response.status === 200) {
        console.log(email);
        const data = await response.json();
        let userId = data.userId;
        userId = userId.toString();
        
        console.log("User ID:", userId);  
        console.log(typeof userId);

        navigate("../account-recovery/verify", { state: { userId } }); // Change to your authenticated page
      } else if (response.status === 404) {
        setError("Email doesn't exists");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Authentication failed");
    }
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={verifyPhoneNumber}>
        <h1 className='title' id='small'>Portal ED</h1>
        <p className='caption' id="medium">Trouble signing in?</p>
        {emailInput.map((input) => (
          <InputField key = {input.id} {...input} value = {email[emailInput.name]} onChange = {onChange}/>
        ))}
        <button className='log-in-button' >Next</button>
        <a className='log-in-link' href='http://localhost:3000/account-recovery/account-id'>I don't know my email</a>
      </form>
    </div>
  )
}

export default PasswordRecovery