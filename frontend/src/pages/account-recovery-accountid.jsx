import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate } from 'react-router-dom'

const AccountIDRecovery = () => {
const navigate = useNavigate();

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    emailAddress: ""
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
        name: "emailAddress",
        type: "tel",
        placeholder: "email address",
        label: "email address"
      }
  ]

  const onChange = (e) => {
    setPersonalInfo({...personalInfo, [e.target.name]: e.target.value})
  };

  const next = (e) => {
    e.preventDefault();
    navigate("../account-recovery/your-account-id");
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