import React from 'react';
import './counselorView.css';

function CounselorView(){
    return(

        <div className="container">
      <div className="header">
        <div className="header-left">
          <p>Counselor View</p>
        </div>
        <div className="header-center">
          <h1>Portal ED</h1>
          <div className="search-bar">
            <label htmlFor="student-id">Student ID:</label>
            <input type="text" id="student-id" name="student-id" />
            <button type="submit">Search</button>
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