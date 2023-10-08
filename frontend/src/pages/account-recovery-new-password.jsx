import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate } from 'react-router-dom'

const NewPassword = () => {
const navigate = useNavigate();

  const [personalInfo, setPersonalInfo] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const infoInput = [
    {
      id: 1,
      name: "newPassword",
      type: "text",
      placeholder: "new password",
      label: "new password"
    },

    {
        id: 2,
        name: "confirmPassword",
        type: "text",
        placeholder: "confirm password",
        label: "confirm password"
    },
  ]

  const onChange = (e) => {
    setPersonalInfo({...personalInfo, [e.target.name]: e.target.value})
  };

  const next = (e) => {
    e.preventDefault();
    navigate("../log-in");
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={next}>
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