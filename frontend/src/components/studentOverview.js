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
              class="name"
            >
              {studentData.firstName} {studentData.lastName}
            </span>{" "}
            &nbsp;&nbsp;{" "}
            <span class="id">Student ID:{studentData.studentID}</span>
          </h2>
        </div>
      </header>
      <body>
        <div>
          <div className="Period">
            <p>
              <b>Period 0: </b>
              {studentData.classes?.period1}
            </p>
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
            <p>
              <b>Teacher Name: </b>B. Banana{" "}
            </p>
          </div>

          <div className="Period">
            <p>
              <b>Period 1: </b>
              {studentData.classes?.period1}
            </p>
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
            <p>
              <b>Teacher Name: </b>B. Banana{" "}
            </p>
          </div>

          <div className="Period">
            <p>
              <b>Period 2: </b>
              {studentData.classes?.period2}
            </p>
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
            <p>
              <b>Teacher Name: </b>B. Banana{" "}
            </p>
          </div>

          <div className="Period">
            <p>
              <b>Period 3: </b>
              {studentData.classes?.period3}
            </p>
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
            <p>
              <b>Teacher Name: </b>B. Banana{" "}
            </p>
          </div>

          <div className="Period">
            <p>
              <b>Period 4: </b>
              {studentData.classes?.period4}
            </p>
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
            <p>
              <b>Teacher Name: </b>B. Banana{" "}
            </p>
          </div>

          <div className="Period">
            <p>
              <b>Period 5: </b>
              {studentData.classes?.period5}
            </p>
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
            <p>
              <b>Teacher Name: </b>B. Banana{" "}
            </p>
          </div>

          <div className="Period">
            <p>
              <b>Period 6: </b>
              {studentData.classes?.period6}
            </p>
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
            <p>
              <b>Teacher Name: </b>B. Banana{" "}
            </p>
          </div>

          <div className="Period">
            <p>
              <b>Period 7: </b>
              {studentData.classes?.period7}
            </p>
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
            <p>
              <b>Teacher Name: </b>B. Banana{" "}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
export default StudentOverview;
