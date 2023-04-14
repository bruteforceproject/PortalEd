
import React from 'react';
import { Link } from 'react-router-dom';
import './parentView.css';

const parentView = () => {
  return (
    <>
      
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
        <Link to="/studentOverview" className="my-button">
          Another Student
          <br />
          StudentID#000002
        </Link>
      </div>
    </>
  );
};

export default parentView;
