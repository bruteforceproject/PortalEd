import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./studentOverview.css";

//Class names, Student Name, and Teacher names will be accessed from DB

//It should also be able to get studentID from teacherview

function StudentOverview() {
  const [studentData, setStudentData] = useState({});
  const [classData, setClassData] = useState({}); //added
  const navigate = useNavigate();
  const location = useLocation();



  useEffect(() => {
    setStudentData(location.state.myData);

    const periodFields = [
      studentData.period0,
      studentData.period1,
      studentData.period2,
      studentData.period3,
      studentData.period4,
      studentData.period5,
      studentData.period6,
      studentData.period7,
    ];

    //fetching class info from each period
    const fetchClassInfo = async () => {
      const classInfoPromises = periodFields.map((periodID) => {
        return fetch('http://localhost:8000/getClass', { // Update the URL here
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ class_id: periodID }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("network response not ok");
            }
            return response.json();
          })
          .catch((error) => {
            console.error("Error fetching class info:", error);
          });
      });
    
      const classInfo = await Promise.all(classInfoPromises);
      setClassData(classInfo);
    };
    

    fetchClassInfo();

  }, [studentData]);

  return (
    <html>
      <header>
        <div className="headLink">
          <h2>
            <span
              onClick={() => {
                if (studentData) {
                  navigate("/studentHistory", {
                    state: { myData: studentData },
                  });
                }
              }}
              
            >
              <span class="name">Student Name: {studentData.fname} {studentData.lname}</span>
            </span>{" "}
            &nbsp;&nbsp;{" "}
            <span class="id">Student ID: {studentData.studentID}</span>
          </h2>
        </div>
      </header>
      <body>
        <div>
    
          
          
          <div className="Period">
            <div className="period-info">
              <p>
                <b>Period 0: </b>
                {classData[0]?.className}
              </p>
              <p>
                <b>Teacher Name: </b>B. Banana{" "}
            </p>
            </div>
            
            <div class="image-container">
              <span className="academicsImg">
                <img src={require("./academics.png")} alt="test" />
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" />
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" />
              </span>
            </div>
            
          </div>

          <div className="Period">

          <div className="period-info">
              <p>
                <b>Period 1: </b>
                {classData[1]?.className}
              </p>
              <p>
                <b>Teacher Name: </b>B. Banana{" "}
            </p>
            </div>
            <div class="image-container">
              <span className="academicsImg">
                <img src={require("./academics.png")} alt="test" />
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" />
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" />
              </span>
            </div>
          </div>

          <div className="Period">
          <div className="period-info">
              <p>
                <b>Period 2: </b>
                {classData[2]?.className}
              </p>
              <p>
                <b>Teacher Name: </b>B. Banana{" "}
            </p>
            </div>
            <div class="image-container">
              <span className="academicsImg">
                <img src={require("./academics.png")} alt="test" />
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" />
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" />
              </span>
            </div>
          </div>

          <div className="Period">
          <div className="period-info">
              <p>
                <b>Period 3: </b>
                {classData[3]?.className}
              </p>
              <p>
                <b>Teacher Name: </b>B. Banana{" "}
            </p>
            </div>
            <div class="image-container">
              <span className="academicsImg">
                <img src={require("./academics.png")} alt="test" />
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" />
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" />
              </span>
            </div>
          </div>

          <div className="Period">
          <div className="period-info">
              <p>
                <b>Period 4: </b>
                {classData[4]?.className}
              </p>
              <p>
                <b>Teacher Name: </b>B. Banana{" "}
            </p>
            </div>
            <div class="image-container">
              <span className="academicsImg">
                <img src={require("./academics.png")} alt="test" />
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" />
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" />
              </span>
            </div>
          </div>

          <div className="Period">
          <div className="period-info">
              <p>
                <b>Period 5: </b>
                {classData[5]?.className}
              </p>
              <p>
                <b>Teacher Name: </b>B. Banana{" "}
            </p>
            </div>
            <div class="image-container">
              <span className="academicsImg">
                <img src={require("./academics.png")} alt="test" />
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" />
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" />
              </span>
            </div>
          </div>

          <div className="Period">
          <div className="period-info">
              <p>
                <b>Period 6: </b>
                {classData[6]?.className}
              </p>
              <p>
                <b>Teacher Name: </b>B. Banana{" "}
            </p>
            </div>
            <div class="image-container">
              <span className="academicsImg">
                <img src={require("./academics.png")} alt="test" />
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" />
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" />
              </span>
            </div>
          </div>

          <div className="Period">
          <div className="period-info">
              <p>
                <b>Period 7: </b>
                {classData[7]?.className}
              </p>
              <p>
                <b>Teacher Name: </b>B. Banana{" "}
            </p>
            </div>
            <div class="image-container">
              <span className="academicsImg">
                <img src={require("./academics.png")} alt="test" />
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" />
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" />
              </span>
            </div>
          </div>
          <div className="navigation-buttons">
              <button className="back-button"
                onClick={() => {
                  navigate("/teacherView");
                }}
              >
                Go back to Teacher View
              </button>
              <button className="back-button"
                onClick={() => {
                  navigate("/counselorView");
                }}
              >
                Go back to Counselor View
              </button>
          </div>
        </div>
      </body>
    </html>
  );
}
export default StudentOverview;
