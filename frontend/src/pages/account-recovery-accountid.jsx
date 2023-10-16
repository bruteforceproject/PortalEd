import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate } from 'react-router-dom'

const AccountIDRecovery = () => {
const navigate = useNavigate();
const [error, setError] = useState("");
  const [personalInfo, setPersonalInfo] = useState({
    fname: "",
    lname: "",
    phone: ""
  });

  const infoInput = [
    {
      id: 1,
      name: "fname",
      type: "text",
      placeholder: "first name",
      label: "first name"
    },

    {
        id: 2,
        name: "lname",
        type: "text",
        placeholder: "last name",
        label: "last name"
    },

    {
        id: 3,
        name: "phone",
        type: "text",
        placeholder: "phone number",
        label: "phone number"
    }
  ]

  const onChange = (e) => {
    setPersonalInfo({...personalInfo, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/get-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(personalInfo),
      });

      if (response.status === 200) {
        const data = await response.json();
        let userEmail = data.email;
        userEmail = userEmail.toString();
        navigate("../account-recovery/your-account-id", { state: { userEmail } });
      } 
      
      else if (response.status === 404) {
        setError("Email not found");
      }
    } 
    
    catch (error) {
      console.error("Error:", error);
      setError("Operation Failed");
    }
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={handleSubmit}>
        <h1 className='title' id='small' >Portal ED</h1>
        <p className='caption' id="medium">Fill the information below to find your Account ID</p>
        {infoInput.map((input) => (
          <InputField key = {input.id} {...input} value = {personalInfo[infoInput.name]} onChange = {onChange}/>
        ))}
        <button className='log-in-button'>Next</button>
      </form>
    </div>
  )
}

export default AccountIDRecovery