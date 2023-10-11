
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './parentView.css';
import './acknowledgeView.js';
import './studentOverview';

const ParentView = () => {
  const location = useLocation();
  const [userId, setUserId] = useState('');
  const [parentName, setParentName] = useState('');
  const [studentInfo, setStudentInfo] = useState([]);

  useEffect(() => {
    // Get userId from location state
    const userIdFromLocation = location.state.userId;
    setUserId(userIdFromLocation);

    // Fetch user data using the userId
    async function fetchUserData(userId) {
      try {
        const response = await fetch(`http://localhost:8000/users/${userId}`);
        if (response.status === 200) {
          const data = await response.json();
          const { fname, lname } = data;
          // Update parentName after fetching data
          setParentName(`${fname} ${lname}`);
        } else {
          console.error('Error fetching user data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

        // Fetch student information using the userId
        async function fetchStudentInfo(userId) {
          try {
            const response = await fetch(`http://localhost:8000/users/${userId}/children`);
            if (response.status === 200) {
              const data = await response.json();
              // Update studentInfo with the fetched data
              setStudentInfo(data);
            } else {
              console.error('Error fetching student info');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        }


    // Call the fetchUserData function
    fetchUserData(userIdFromLocation);
    fetchStudentInfo(userIdFromLocation);


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
  

  },[location.state.userId]
  );
  return (
    <>
      <div className="header">Portal Ed</div>
      <div className="header-2">{parentName}</div>
      <div className="button-container">
        {studentInfo.map((student, index) => (
          <div key={index} className="student-link">
            <Link to={`/acknowledgeView/`} className="my-button" id={`textLength${index}`}>
              <div>
                <span>{`${student.fname} ${student.lname}`}</span>
                <span className="student-id">{`${student.alertCount} Unacknowledged Alerts!`}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ParentView;