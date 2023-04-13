
import React from 'react';
import { Link } from 'react-router-dom';

const ParentView = () => {
  return (
    <>
      <style>
        {`.header {
          position: absolute;
          top: 50px;
          left: 0;
          width: 100%;
          text-align: center;
          font-size:60px;
          font-weight: bold;
        }
        .header-2 {
          position: absolute;
          top: 175px;
          left: 0;
          width: 100%;
          text-align: center;
          font-size:48px;
          font-weight: bold;
        }
        
        .button-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .my-button {
          display: inline-block;
          padding: 48px 75px;
          background-color: #d9d9d9;
          color: black;
          text-decoration: none;
          border-radius: 5px;
          font-size: 48px;
        }
        .button-container2 {
          margin-top: 250px;
        }`}
      </style>
      <div className="header">Portal Ed</div>
      <div className="header-2">Parent Name</div>
      <div className="button-container">
        <Link to="/studentOverview" className="my-button">
          Student Name
          <br />
          StudentID#000001
        </Link>
      </div>
      <div className="button-container button-container2">
        <a href="studentOverview.js" className="my-button">
          Another Student
          <br />
          StudentID#000002
        </a>
      </div>
    </>
  );
};

export default ParentView;