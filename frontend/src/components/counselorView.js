import React from "react";
import logo from "../logo1.png";

import "./counselorView.css";

function CounselorView() {
  return (
    <div className="container_cou">
      <div className="header_cou">
        <div className="header-left_cou">
          <button>Home</button>
        </div>
        <div className="header-center_cou">
          <img src={logo} alt="logo" />
          <div>
            <div>
              <label>Student ID:</label>
            </div>
            <div className="search-bar_cou">
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
        <div className="header-right_cou">
          <button>Log Out</button>
        </div>
      </div>
    </div>
  );
}
export default CounselorView;
