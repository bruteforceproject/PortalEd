import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate } from 'react-router-dom'

const Verify = () => {
  const navigate = useNavigate();
  
  const [phoneNumber, setAccountID] = useState({
    phoneNumber: ""
  });

  const phoneInput = [
    {
      id: 1,
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      label: "Phone Number"
    },
  ]

  const onChange = (e) => {
    setAccountID({...phoneNumber, [e.target.name]: e.target.value})
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    let id = e.target.id;
    if(id=== 'next-button'){
        
        navigate("../account-recovery/notification-sent");
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
        <p className='caption' id="small">Enter your phone number</p>
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