import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./studentOverview.css";



function StudentOverview() {
  const [studentData, setStudentData] = useState({});
  const [classData, setClassData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [academicsData, setAcademicsData] = useState([]);
  const [behaviorData, setBehaviorData] = useState([]);

    
  const [content, setContent] = useState('null');
  const [teacher_id, setTeacherID] = useState('null'); // Initialize as an empty string
  const [period0, setperiod0] = useState('null'); 
  const [period1, setperiod1] = useState('null'); 
  const [period2, setperiod2] = useState('null'); 
  const [period3, setperiod3] = useState('null'); 
  const [period4, setperiod4] = useState('null'); 
  const [period5, setperiod5] = useState('null'); 
  const [period6, setperiod6] = useState('null'); 
  const [period7, setperiod7] = useState('null'); 
  

  const navigate = useNavigate();
  const location = useLocation();



  useEffect(() => {

    // Ensure that the studentData is available before proceeding
    if (location.state && location.state.myData) {
      const studentData = location.state.myData;

        setTeacherID(location.state.teacher_id);
        setperiod0(location.state.period0);
        setperiod1(location.state.period1);
        setperiod2(location.state.period2);
        setperiod3(location.state.period3);
        setperiod4(location.state.period4);
        setperiod5(location.state.period5);
        setperiod6(location.state.period6);
        setperiod7(location.state.period7);


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

            //fetch attendance data
            const attendanceResponse = await fetch('http://localhost:8000/getAttendance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: studentData.studentID, class_id: periodID }),
          });
          if (!attendanceResponse.ok) {
            throw new Error("Network response not ok");
          }
          const attendanceInfo = await attendanceResponse.json();

          //Fetch behavior data
          const behaviorResponse = await fetch('http://localhost:8000/getBehavior', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: studentData.studentID, class_id: periodID }),
          });
          if (!behaviorResponse.ok) {
            throw new Error("Network response not ok");
          }
          const behaviorInfo = await behaviorResponse.json();

          //Fetch academics data
          const academicsResponse = await fetch('http://localhost:8000/getAcademics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: studentData.studentID, class_id: periodID }),
          });
          if (!academicsResponse.ok) {
            throw new Error("Network response not ok");
          }
          const academicsInfo = await academicsResponse.json();



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

            //console.log("Attendance Info:", attendanceInfo);

            return { classInfo, teacherInfo, attendanceInfo, academicsInfo, behaviorInfo };
          } catch (error) {
            console.error("Error fetching class and teacher info:", error);
            return { classInfo: null, teacherInfo: null , attendanceData: null, academicsData: null, behaviorData: null};
          }
        });

        const combinedData = await Promise.all(combinedDataPromises);
        const classInfo = combinedData.map((data) => data.classInfo);
        const teacherInfo = combinedData.map((data) => data.teacherInfo);
        const attendanceInfo = combinedData.map((data) => data.attendanceInfo);
        const academicsInfo = combinedData.map((data) => data.academicsInfo);
        const behaviorInfo = combinedData.map((data) => data.behaviorInfo);
        setClassData(classInfo);
        setTeacherData(teacherInfo);
        setAttendanceData(attendanceInfo);
        setAcademicsData(academicsInfo);
        setBehaviorData(behaviorInfo);
      };

      fetchData();
    }
  }, [location.state]);

  const userRole = location.state?.userRole;

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
                <img src={require("./academics.png")} alt="test" style={{ backgroundColor: academicsData[0]?.color }}/>
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" style={{ backgroundColor: attendanceData[0]?.color }}/> 
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" style={{ backgroundColor: behaviorData[0]?.color }}/>
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
                  <img src={require("./academics.png")} alt="test"  style={{ backgroundColor: academicsData[1]?.color }}/>
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" style={{ backgroundColor: attendanceData[1]?.color }}/>  
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" style={{ backgroundColor: behaviorData[1]?.color }}/> 
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
                <img src={require("./academics.png")} alt="test" style={{ backgroundColor: academicsData[2]?.color }}/>
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" style={{ backgroundColor: attendanceData[2]?.color }}/> 
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" style={{ backgroundColor: behaviorData[2]?.color }}/>
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
                <img src={require("./academics.png")} alt="test" style={{ backgroundColor: academicsData[3]?.color }}/>
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" style={{ backgroundColor: attendanceData[3]?.color }}/>  
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" style={{ backgroundColor: behaviorData[3]?.color }}/>
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
                <img src={require("./academics.png")} alt="test" style={{ backgroundColor: academicsData[4]?.color }}/>
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" style={{ backgroundColor: attendanceData[4]?.color }}/>  
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" style={{ backgroundColor: behaviorData[4]?.color }}/> 
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
                <img src={require("./academics.png")} alt="test" style={{ backgroundColor: academicsData[5]?.color }}/>
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" style={{ backgroundColor: attendanceData[5]?.color }}/>  
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" style={{ backgroundColor: behaviorData[5]?.color }}/> 
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
                <img src={require("./academics.png")} alt="test" style={{ backgroundColor: academicsData[6]?.color }}/>
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" style={{ backgroundColor: attendanceData[6]?.color }}/>  
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" style={{ backgroundColor: behaviorData[6]?.color }}/> 
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
                <img src={require("./academics.png")} alt="test" style={{ backgroundColor: academicsData[7]?.color }}/>
              </span>
              <span className="attendanceImg">
                <img src={require("./attendance.png")} alt="test" style={{ backgroundColor: attendanceData[7]?.color }}/> 
              </span>
              <span className="behaviorImg">
                <img src={require("./behavior.png")} alt="test" style={{ backgroundColor: behaviorData[7]?.color }}/> 
              </span>
            </div>
          </div>
          <div className="navigation-buttons">
            {userRole === "teacher" && (
              <button className="back-button"
              onClick={() => {
                navigate("/teacherView", { state: { teacher_id, period0, period1, period2, period3, period4, period5, period6, period7} });
              }}
            >
              Go back to Teacher View
            </button>
            )}
            {userRole === "counselor" && (
              <button className="back-button"
              onClick={() => {
                navigate("/counselorView");
              }}
            >
              Go back to Counselor View
            </button>
            )}
            
          </div>
        </div>
      </body>
    </html>
  );
}
export default StudentOverview;
