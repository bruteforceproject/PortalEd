import { React, useState } from 'react'
import InputField from '../assets/components/input-field'
import "../assets/page-styles/log-in.css"
import { useNavigate, useLocation } from 'react-router-dom'


const EnterCode = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const userPhone = location.state.userPhone
  const userEmail = location.state.userEmail 
  const [error, setError] = useState("");   
  const [code, setCode] = useState({
    code: "",
    phone: userPhone
  });

  const codeInput = [
    {
      id: 1,
      name: "code",
      type: "code",
      placeholder: "Code",
      label: "Code"
    },
  ]

  const onChange = (e) => {
    setCode({...code, [e.target.name]: e.target.value})
  };

  const buttonHandler = async (e) => {
    e.preventDefault();
    let id = e.target.id;
    if(id === 'next-button'){
      try {
        const response = await fetch("http://localhost:8000/api/start-check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(code),
        });
  
        if (response.status === 200) {
          navigate("../account-recovery/new-password", { state: { userEmail } });
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
    else if(id === 'back-button') {
        navigate(-1);
    }
  }

  return (
    <div className = "log-in">
      <form className='log-in-form' onSubmit={buttonHandler}>
        <h1 className='title' id='small'>Portal ED</h1>
        <p className='caption' id="medium">Code confirmation</p>
        <p className='caption' id="small">Enter the code you received</p>
        {codeInput.map((input) => (
          <InputField key = {input.id} {...input} value = {code[codeInput.name]} onChange = {onChange}/>
        ))}
        <div className = "nav-buttons">
        <button className='log-in-button' id='back-button' onClick={buttonHandler} >Back</button>
        <button className='log-in-button' id='next-button' onClick={buttonHandler} >Next</button>
        </div>
      </form>
    </div>
  )
}

export default EnterCode