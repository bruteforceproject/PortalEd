import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate, useLocation } from 'react-router-dom'

const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userPhone = location.state.userPhone
  const userEmail = location.state.userEmail
  const [error, setError] = useState("");
  
  const [phoneNumber, setPhoneNumber] = useState({
    phone: "",
    email: userEmail
  });

  const phoneInput = [
    {
      id: 1,
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      label: "Phone Number"
    },
  ]

  const onChange = (e) => {
    setPhoneNumber({...phoneNumber, [e.target.name]: e.target.value})
  };

  const buttonHandler = async (e) => {
    e.preventDefault();
    console.log(userEmail)
    let id = e.target.id;
    if(id === 'next-button'){
      try {
        const response = await fetch("http://localhost:8000/api/start-verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(phoneNumber),
        });
  
        if (response.status === 200) {
  
          navigate("../account-recovery/enter-code");
        } 
        
        else if (response.status === 404) {
          setError("Email doesn't exists");
        }
      } 
      
      catch (error) {
        console.error("Error:", error);
        setError("Operation Failed");
      }
    }
    else if(id === 'back-button') {
        navigate(-1);
    }
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={buttonHandler}>
        <h1 className='title' id='small'>Portal ED</h1>
        <p className='caption' id="medium">Confirm your phone number</p>
        <p className='caption' id="small">Enter your phone number associated with your account: {userPhone}</p>
        {phoneInput.map((input) => (
          <InputField key = {input.id} {...input} value = {phoneNumber[phoneInput.name]} onChange = {onChange}/>
        ))}
        <div className = "nav-buttons">
        <button className='log-in-button' id='back-button' onClick={buttonHandler} >Back</button>
        <button className='log-in-button' id='next-button' onClick={buttonHandler} >Next</button>
        </div>
      </form>
    </div>
  )
}

export default Verify