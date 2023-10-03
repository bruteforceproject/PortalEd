import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './studentOverview.css';
//import './academics.png';

//import {Link} from "react-router-dom";
//Class names, Student Name, and Teacher names will be accessed from DB

//added a temporary search function to display student information based on ID
//this will need to be replaced and studentID will need to be passed from studentHistory or Counselor View
//It should also be able to get studentID from teacherview


function StudentOverview() {

  const [studentData, setStudentData] = useState({});
  const [studentID, setStudentID] = useState("");
  const [recordFound, setRecordFound] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {

      //clear the studentData
      setStudentData({});

      const response = await fetch(`http://localhost:8000/getStudents`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: studentID,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data = await response.json();
      setStudentData(data);
      setRecordFound(true);
    } catch (error) {
      console.error('Error fetching student data:', error);
      setStudentData({}); // Reset studentData if there was an error
      setRecordFound(false);
    }
  };

  //I will use this to auto update when other views are successfully able to send studentID
  //useEffect(() => {
  //  fetchData();
  //}, [studentID])

  return (
    <html>      
    <header>        
        <div className="headLink">
        <a href="studentHistory">
            <span class="link"></span>
        </a>
        <h2><span class = "name">{studentData.firstName} {studentData.lastName}</span> &nbsp;&nbsp; <span class = "id">Student ID:{studentData.studentID}</span></h2>
        
        </div>
    </header>
    <body>

    
    <input
      type="text"
      placeholder="Enter Student ID"
      value={studentID}
      onChange={(e) => setStudentID(e.target.value)}
    />
    <button onClick={fetchData}>Search</button>

    <div>
      {recordFound && (
        <div className='Period'>
          <p><b>Period 0:  </b>{studentData.classes?.period1}</p>   
          <div class = "image-container">
            <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
            <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
            <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
          </div>
          <p><b>Teacher Name: </b>B. Banana  </p>
          
    </div>
    )}

      {recordFound && (
        <div className='Period'>
        <p><b>Period 1:  </b>{studentData.classes?.period1}</p>   
        <div class = "image-container">
          <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
          <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
          <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
        </div>
        <p><b>Teacher Name: </b>B. Banana  </p>
        </div>
      )}

      {recordFound && (
        <div className='Period'>
        <p><b>Period 2:  </b>{studentData.classes?.period2}</p>   
        <div class = "image-container">
          <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
          <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
          <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
        </div>
        <p><b>Teacher Name: </b>B. Banana  </p>
        </div>
      )}
        
        {recordFound && (
        <div className='Period'>
        <p><b>Period 3:  </b>{studentData.classes?.period3}</p>   
        <div class = "image-container">
          <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
          <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
          <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
        </div>
        <p><b>Teacher Name: </b>B. Banana  </p>
        </div>
      )}

      {recordFound && (
        <div className='Period'>
        <p><b>Period 4:  </b>{studentData.classes?.period4}</p>   
        <div class = "image-container">
          <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
          <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
          <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
        </div>
        <p><b>Teacher Name: </b>B. Banana  </p>
        </div>
      )}

      {recordFound && (
        <div className='Period'>
        <p><b>Period 5:  </b>{studentData.classes?.period5}</p>   
        <div class = "image-container">
          <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
          <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
          <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
        </div>
        <p><b>Teacher Name: </b>B. Banana  </p>
        </div>
      )}

      {recordFound && (
        <div className='Period'>
        <p><b>Period 6:  </b>{studentData.classes?.period6}</p>   
        <div class = "image-container">
          <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
          <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
          <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
        </div>
        <p><b>Teacher Name: </b>B. Banana  </p>
        </div>
      )}

      {recordFound && (
        <div className='Period'>
        <p><b>Period 7:  </b>{studentData.classes?.period7}</p>   
        <div class = "image-container">
          <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
          <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
          <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
        </div>
        <p><b>Teacher Name: </b>B. Banana  </p>
        </div>
      )}

    
    </div>
    </body>
    </html>
  )
}
export default StudentOverview;