import React, { useState } from 'react';
import logo from '../logo.png';
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";


function Home() {
  const location = useLocation();
  const userId = location.state.userId;
  
  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This landing page is for presentation purposes only.
        </p>
        <p>User ID: {userId} </p> {/* Display the userId here */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div>
        <ul>
            <Link to="/log-in">Login</Link>
          </ul>
          <ul>
            <Link to="/studentOverview">StudentOverview</Link>
          </ul>
          <ul>
            <Link to="/teacherView">TeacherView</Link>
          </ul>
          <ul>
            <Link to="/counselorView">CounselorView</Link>
          </ul>
          <ul>
            <Link to="/studentHistory">StudentHistory</Link>
          </ul>
          <ul>
            <Link to="/parentView">ParentView</Link>
          </ul>
        </div>
      </header>
    </div>       

  )
}
export default Home;