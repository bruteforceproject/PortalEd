import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./studentOverview.css";



function StudentOverview() {
  const [studentData, setStudentData] = useState({});
  const [classData, setClassData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Ensure that the studentData is available before proceeding
    if (location.state && location.state.myData) {
      const studentData = location.state.myData;
      setStudentData(studentData);

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

      // Fetch class and teacher data
      const fetchData = async () => {
        const combinedDataPromises = periodFields.map(async (periodID) => {
          try {
            // Fetch class data
            const classResponse = await fetch('http://localhost:8000/getClass', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ class_id: periodID }),
            });
            if (!classResponse.ok) {
              throw new Error("Network response not ok");
            }
            const classInfo = await classResponse.json();

            // Fetch teacher data based on classInfo
            const teacherResponse = await fetch('http://localhost:8000/getTeacher', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ teacher_id: classInfo?.teacher_id }),
            });
            if (!teacherResponse.ok) {
              throw new Error("Network response not ok");
            }
            const teacherInfo = await teacherResponse.json();

            return { classInfo, teacherInfo };
          } catch (error) {
            console.error("Error fetching class and teacher info:", error);
            return { classInfo: null, teacherInfo: null };
          }
        });

        const combinedData = await Promise.all(combinedDataPromises);
        const classInfo = combinedData.map((data) => data.classInfo);
        const teacherInfo = combinedData.map((data) => data.teacherInfo);

        setClassData(classInfo);
        setTeacherData(teacherInfo);
      };

      fetchData();
    }
  }, [location.state]);

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
                <b>Teacher Name: </b>{teacherData[0]?.fname}{" "}{teacherData[0]?.lname}
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
              <b>Teacher Name: </b>{teacherData[1]?.fname}{" "}{teacherData[1]?.lname}
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
              <b>Teacher Name: </b>{teacherData[2]?.fname}{" "}{teacherData[2]?.lname}
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
              <b>Teacher Name: </b>{teacherData[3]?.fname}{" "}{teacherData[3]?.lname}
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
              <b>Teacher Name: </b>{teacherData[4]?.fname}{" "}{teacherData[4]?.lname}
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
              <b>Teacher Name: </b>{teacherData[5]?.fname}{" "}{teacherData[5]?.lname}
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
              <b>Teacher Name: </b>{teacherData[6]?.fname}{" "}{teacherData[6]?.lname}
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
              <b>Teacher Name: </b>{teacherData[7]?.fname}{" "}{teacherData[7]?.lname}
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
