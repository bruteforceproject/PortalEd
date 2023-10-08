import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate } from 'react-router-dom'

const AccountIDRecovery = () => {
const navigate = useNavigate();
const [error, setError] = useState("");
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: ""
  });

  const infoInput = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "first name",
      label: "first name"
    },

    {
        id: 2,
        name: "lastName",
        type: "text",
        placeholder: "last name",
        label: "last name"
    },

    {
        id: 3,
        name: "phoneNumber",
        type: "tel",
        placeholder: "phone number",
        label: "phone number"
    }
  ]

  const onChange = (e) => {
    setPersonalInfo({...personalInfo, [e.target.name]: e.target.value})
  };

  const next = async (e) => {
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
        console.log(personalInfo);
        const data = await response.json();
        let userId = data.userId;
        userId = userId.toString();
        
        console.log("User ID:", userId);  
        console.log(typeof userId);

        navigate("../account-recovery/your-account-id", { state: { userId } });
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
      <form className='log-in-form' onSubmit={next}>
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