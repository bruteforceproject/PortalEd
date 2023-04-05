import React from 'react';
import logo from '../logo.png';
import {Link} from "react-router-dom";

function home() {
  return (
    
        
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PortalEd is in progress. Teacher View, Parent-Student View, and Counselor View coming soon.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div>
          <ul>
              <Link to="/studentOverview">StudentOverview</Link>
          </ul>
          </div>
      </header>
    </div>       
   
  )
}
export default home;