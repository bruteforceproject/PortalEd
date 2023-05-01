
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './parentView.css';

import './studentOverview';

const ParentView = () => {
  useEffect(() =>{

    const buttons = document.querySelectorAll('.my-button');
    
    buttons.forEach(button =>{
      const textLength = button.innerText.length;
      const buttonId = button.getAttribute('id');
      if(buttonId === 'textLength') {
        if(textLength <= 10){
          button.classList.add('short');
        }else if (textLength <= 20){
          button.classList.add('medium');
        }else{
          button.classList.add('long');
        }
      } else {
        if(textLength <= 15){
          button.classList.add('short');
        }else if (textLength <= 25){
          button.classList.add('medium');
        }else{
          button.classList.add('long');
        }
      }
    });
  

  },[]
  );
  return (
    <>
      
      <div className="header">Portal Ed</div>
      <div className="header-2">Parent Name</div>
      <div className="button-container">
      <Link to="/studentOverview" className="my-button" id="textLength">
      <div>
      <span>Student Name</span>
      <span className="student-id">2 Unacknowledged Alerts!</span>
      </div>
        </Link>
      </div>
      <div className="button-container button-container2">
        <Link to="/studentOverview" className="my-button" id="textLength2">
        <div>
        <span>Another Student</span>
        <span className="student-id2">0 Unacknowledged Alerts</span>
      </div>
        </Link>
      </div>
    </>
  );
};

export default ParentView;