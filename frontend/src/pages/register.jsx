import React, { useState } from "react";
import InputField from "../assets/components/input-field";
import "../assets/page-styles/log-in.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    
    // Add other fields as needed
  });

  const [error, setError] = useState(""); // Add state for error message

  const accountInputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "email",
      label: "email",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    // Add additional input fields here
  ];

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 201) {
        // Registration successful, redirect to the dashboard or home page
        navigate("/log-in"); // Change to your authenticated page
      } else if (response.status === 400) {
        // Email already exists, set the error message
        setError("Email already has an account");
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
          Create a Portal ED account
        </p>
        {accountInputs.map((input) => (
          <InputField
            key={input.id}
            {...input}
            value={userData[input.name]}
            onChange={onChange}
          />
          ))}
          <button className="log-in-button" type="submit">
            Sign Up
          </button>
          <div className="error-message">
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <a
            className="log-in-link"
            href="http://localhost:3000/account-recovery/password"
          >
            Forgot email or password?
        </a>
      </form>
    </div>
  );
};

export default Register;
