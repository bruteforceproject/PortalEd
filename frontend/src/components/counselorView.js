import React from "react";
import logo from "../logo1.png";

import "./counselorView.css";

function CounselorView() {
  return (
    <div className="container_cou">
      <div className="header-right_cou">
        <button className="button_cou">Log Out</button>
      </div>
      <div className="header-center_cou">
        <img src={logo} alt="logo" />
        <div>
          <div className="label_container_cou">
            <label className="student_id_text_cou">Student ID:</label>
          </div>
          <div className="search-bar_cou">
            <input
              className="input_search_cou"
              placeholder="Search..."
              type="text"
              id="student-id"
              name="student-id"
            />
            <button className="button_cou" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CounselorView;
