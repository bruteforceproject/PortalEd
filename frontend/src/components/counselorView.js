import React from "react";
import logo from "../logo1.png";

import "./counselorView.css";

function CounselorView() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <button>Home</button>
        </div>
        <div className="header-center">
          <img src={logo} alt="logo" />
          <div>
            <div>
              <label>Student ID:</label>
            </div>
            <div className="search-bar">
              <input
                placeholder="Search..."
                type="text"
                id="student-id"
                name="student-id"
              />
              <button type="submit">Search</button>
            </div>
          </div>
        </div>
        <div className="header-right">
          <button>Log Out</button>
        </div>
      </div>
    </div>
  );
}
export default CounselorView;
