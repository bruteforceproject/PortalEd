import React, { useState } from "react";
import InputField from "../assets/components/input-field";
import "../assets/page-styles/log-in.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");


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
  ];

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.status === 200) {
        // Authentication successful, redirect to the dashboard or home page
        const data = await response.json();
        let userId = data.userId; // Retrieve the userId from the response
        userId= userId.toString();
        // Now you can use the userId as needed, e.g., store it in state, local storage, or redirect to a new page.
        console.log("User ID:", userId);  
        console.log(typeof userId);

        navigate("/home", { state: { userId } }); // Change to your authenticated page
      } else if (response.status === 401) {
        setError("Incorrect password");
      } else if (response.status === 404) {
        setError("User not found");
      } else {
        setError("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Authentication failed");
    }
  };

  return (
    <div className="log-in">
      <form className="log-in-form" onSubmit={handleSubmit}>
        <h1 className="title">Portal ED</h1>
        <p className="caption" id="small">
          Sign in to your Portal ED account
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
          Sign In
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

export default Login;
