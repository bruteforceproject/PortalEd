import React, { useState } from "react";
import InputField from "../assets/components/input-field";
import "../assets/page-styles/log-in.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    accountID: "",
    password: "",
  });

  const accountInputs = [
    {
      id: 1,
      name: "accountID",
      type: "text",
      placeholder: "Account ID",
      label: "Account ID",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
  ];

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");

    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      console.log("Response status:", response.status);

      if (response.status === 201) {
        console.log("User created successfully");
        navigate("/home");
      } else {
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="log-in">
      <form className="log-in-form" onSubmit={handleSubmit}>
        <h1 className="title">Portal ED</h1>
        <p className="caption" id="small">
          [Admin Only]: Register account
        </p>
        {accountInputs.map((input) => (
          <InputField
            key={input.id}
            {...input}
            value={credentials[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="log-in-button" type="submit"> 
          Next
        </button>
        <a
          className="log-in-link"
          href="http://localhost:3000/account-recovery/password"
        >
          Forgot Account ID or password?
        </a>
      </form>
    </div>
  );
};

export default Register;
