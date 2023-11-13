import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate, useLocation } from 'react-router-dom'

const NewPassword = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const userEmail = location.state.userEmail

  const [personalInfo, setPersonalInfo] = useState({
    password: "",
    email: userEmail
  });

  const infoInput = [
    {
      id: 1,
      name: "password",
      type: "text",
      placeholder: "new password",
      label: "new password"
    }
  ]

  const onChange = (e) => {
    setPersonalInfo({...personalInfo, [e.target.name]: e.target.value})
  };

  const finish = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(personalInfo),
      });

      if (response.status === 200) {
        navigate("../log-in");
      } 
      
      else if (response.status === 404) {
        console.log("Something went wrong")
      }
    } 
    
    catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={finish}>
        <h1 className='title' id='small' >Portal ED</h1>
        <p className='caption' id="medium">Set your new password</p>
        {infoInput.map((input) => (
          <InputField key = {input.id} {...input} value = {personalInfo[infoInput.name]} onChange = {onChange}/>
        ))}
        <button className='log-in-button'>Finish</button>
      </form>
    </div>
  )
}

export default NewPassword