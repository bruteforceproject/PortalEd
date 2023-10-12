import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./studentOverview.css";

//Class names, Student Name, and Teacher names will be accessed from DB

//It should also be able to get studentID from teacherview

function StudentOverview() {
  const [studentData, setStudentData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setStudentData(location.state.myData);
  }, []);

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
                {studentData.period0}
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
                {studentData.period1}
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
                {studentData.period2}
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
                {studentData.period3}
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
                {studentData.period4}
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
                {studentData.period5}
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
                {studentData.period6}
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
                {studentData.period7}
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
        </div>
      </body>
    </html>
  );
}
export default StudentOverview;
