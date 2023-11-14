import React from 'react'
import './teacherView.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
//import { GrValidate } from "react-icons/gr"; 
//import axios from 'axios'
import { period_0StudentsFunction, period_1StudentsFunction, period_2StudentsFunction } from './periodchange';
import { period_3StudentsFunction, period_4StudentsFunction, period_5StudentsFunction } from './periodchange';
import { period_6StudentsFunction, period_7StudentsFunction} from './periodchange';

let num = -1;
let dataStoredStart = -1;
let content = null;

const TeacherView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [teacherID, setTeacherID] = useState('null'); // Initialize as an empty string
  const [period0, setperiod0] = useState('null'); 
  const [period1, setperiod1] = useState('null'); 
  const [period2, setperiod2] = useState('null'); 
  const [period3, setperiod3] = useState('null'); 
  const [period4, setperiod4] = useState('null'); 
  const [period5, setperiod5] = useState('null'); 
  const [period6, setperiod6] = useState('null'); 
  const [period7, setperiod7] = useState('null'); 
  
  const [period_0Students, setperiod_0Students] = useState([]);
  const [period_1Students, setperiod_1Students] = useState([]);
  const [period_2Students, setperiod_2Students] = useState([]);
  const [period_3Students, setperiod_3Students] = useState([]);
  const [period_4Students, setperiod_4Students] = useState([]);
  const [period_5Students, setperiod_5Students] = useState([]);
  const [period_6Students, setperiod_6Students] = useState([]);
  const [period_7Students, setperiod_7Students] = useState([]);

  // Start of Period Switch Setup
  //?? How to put this false thingy in database and extract from there?
  const [switches, setSwitches] = useState([false, false, false, false, false, false, false, false]);
  const [activeSwitch, setActiveSwitch] = useState(null);

  useEffect(() => {
    // Define the API endpoint URL for fetching students by period
    const apiUrl = 'http://localhost:8000/getStudentsByPeriod';
  
    // Make an HTTP POST request to the API with the period_0 value
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ period0, period1, period2, period3, period4, period5, period6, period7 }), // Send the period_0 value in the request body
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response contains the list of first names
        let period_0Students = data.studentData0;
        const period_1Students = data.studentData1;
        const period_2Students = data.studentData2;
        const period_3Students = data.studentData3;
        const period_4Students = data.studentData4;
        const period_5Students = data.studentData5;
        const period_6Students = data.studentData6;
        const period_7Students = data.studentData7;
        // console.log('period 0 Student First Names:', period_0Students);
        
        

        setperiod_0Students(period_0Students);
        setperiod_1Students(period_1Students);
        setperiod_2Students(period_2Students);
        setperiod_3Students(period_3Students);
        setperiod_4Students(period_4Students);
        setperiod_5Students(period_5Students);
        setperiod_6Students(period_6Students);
        setperiod_7Students(period_7Students);
        
        
        // Now you can use studentFirstNames in your component state or render them as needed
        setTeacherID(location.state.teacher_id);
        setperiod0(location.state.period0);
        setperiod1(location.state.period1);
        setperiod2(location.state.period2);
        setperiod3(location.state.period3);
        setperiod4(location.state.period4);
        setperiod5(location.state.period5);
        setperiod6(location.state.period6);
        setperiod7(location.state.period7);
  
        if (activeSwitch !== null) {
          const updatedSwitches = [...switches];
          updatedSwitches[activeSwitch] = true;
          setSwitches(updatedSwitches);
        } 
        
        switch (dataStoredStart) {
          case -1:
            period_0StudentsFunction(period_0Students, period0);
            break;
          case 0:
            period_1StudentsFunction(period_1Students, period1);
            break;
          case 1:
            period_2StudentsFunction(period_2Students, period2);
            break;
          case 2:
            period_3StudentsFunction(period_3Students, period3);
            break;
          case 3:
            period_4StudentsFunction(period_4Students, period4);
            break;
          case 4:
            period_5StudentsFunction(period_5Students, period5);
            break;
          case 5:
            period_6StudentsFunction(period_6Students, period6);
            break;
          case 6:
            period_7StudentsFunction(period_7Students, period7);
            break;
          default:
            break;
        }
           

      })
      .catch((error) => {
        console.error('Error fetching student data by period:', error);
        // Handle error appropriately, e.g., set an error state
      });
  }, [activeSwitch, period0, period1, period2, period3, period4, period5, period6, period7]);
  
  


  const handleSwitchClick = (index) => {
    if (activeSwitch === null) {
      const turnOn = window.confirm(`Start the Period ${index}`);
      if (turnOn) {
        setActiveSwitch(index);
        num = index;
        dataStoredStart = index;
      }
    } else if (activeSwitch === index) {
      alert("Finishing the Period will save all the data of Atendance, Behaviour, and Academic");
      const turnOff = window.confirm(`Are you sure that you want to finish the Period ${index}`);
      if (turnOff) {
        setActiveSwitch(null);
        num = -1;
      }
    }
    else{
      alert("Finish the other period first!");
    }
  };
  // End of Period Switch Setup


  async function getData(studentID) {
    await fetch(`http://localhost:8000/getStudents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: studentID,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("testing",data)
          navigate("/studentOverview", {
            state: { myData: data },
          });
        } else {
          alert("Error: \nStudent ID is not Found!");
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(()=> {
    console.log("RunInside",period_0Students );
    if (num == 0) {
      
      content =
        period_0Students.map((student, index) => (
          
          <div className="student" key={index}>
          <div className='grid1' key={index} onClick={async () => {
            if (student.studentID) {
              await getData(student.studentID);
            }
          }}>
          {student.fname} 
          </div>
          <div className='grid2 gridall' style={{ backgroundColor: student.attendanceData || 'default-color' }}></div>
          <div className='grid3 gridall' style={{ backgroundColor: student.behaviourColor || 'default-color' }}></div>
          <div className='grid4 gridall' style={{ backgroundColor: student.academicsColor || 'default-color' }}> </div>
          <button className={"grid5 gridall default-color"}>
            <span className='teacher_logo'><img src={require('./attendance.png')} alt="test" /></span>
          </button>
          <button className="grid6 gridall default-color ">
            <span className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></span>
          </button>
          <button className="grid7 gridall default-color">
            <span className='teacher_logo'><img src={require('./academics.png')} alt="test" /></span>
          </button>
        </div>
        ))
    } else if(num == 1) {
      content =
        period_1Students.map((student, index) => (
          <div className="student" key={index}>
          <div className='grid1' key={index} >
            {student.fname}
          </div>
          <div className='grid2 gridall' style={{ backgroundColor: student.attendanceData || 'default-color' }}></div>
          <div className='grid3 gridall' style={{ backgroundColor: student.behaviourColor || 'default-color' }}></div>
          <div className='grid4 gridall' style={{ backgroundColor: student.academicsColor || 'default-color' }}> </div>
          <button className={"grid5 gridall default-color"} >
            <span className='teacher_logo'><img src={require('./attendance.png')} alt="test" /></span>
          </button>
          <button className="grid6 gridall default-color ">
            <span className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></span>
          </button>
          <button className="grid7 gridall default-color">
            <span className='teacher_logo'><img src={require('./academics.png')} alt="test" /></span>
          </button>
      </div>
        ))
    } else if(num == 2) {
      content =
        period_2Students.map((student, index) => (
          <div className="student" key={index}>
          <div className='grid1' key={index} >
            {student.fname}
          </div>
          <div className='grid2 gridall default-color' ></div>
          <div className='grid3 gridall default-color'></div>
          <div className='grid4 gridall default-color'> </div>
          <button className={"grid5 gridall default-color"} >
          </button>
          <button className="grid6 gridall default-color ">
            <span className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></span>
          </button>
          <button className="grid7 gridall default-color">
            <span className='teacher_logo'><img src={require('./academics.png')} alt="test" /></span>
          </button>
      </div>
        ))
    } else if(num == 3) {
      content =
        period_3Students.map((student, index) => (
          <div className="student" key={index}>
          <div className='grid1' key={index} >
            {student.fname}
          </div>
          <div className='grid2 gridall default-color' ></div>
          <div className='grid3 gridall default-color'></div>
          <div className='grid4 gridall default-color'> </div>
          <button className={"grid5 gridall default-color"} >
          </button>
          <button className="grid6 gridall default-color ">
            <span className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></span>
          </button>
          <button className="grid7 gridall default-color">
            <span className='teacher_logo'><img src={require('./academics.png')} alt="test" /></span>
          </button>
      </div>
        ))
    } else if(num == 4) {
      content =
        period_4Students.map((student, index) => (
          <div className="student" key={index}>
          <div className='grid1' key={index} >
            {student.fname}
          </div>
          <div className='grid2 gridall default-color' ></div>
          <div className='grid3 gridall default-color'></div>
          <div className='grid4 gridall default-color'> </div>
          <button className={"grid5 gridall default-color"} >
          </button>
          <button className="grid6 gridall default-color ">
            <span className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></span>
          </button>
          <button className="grid7 gridall default-color">
            <span className='teacher_logo'><img src={require('./academics.png')} alt="test" /></span>
          </button>
      </div>
        ))
    } else if(num == 5) {
      content =
        period_5Students.map((student, index) => (
          <div className="student" key={index}>
          <div className='grid1' key={index} >
            {student.fname}
          </div>
          <div className='grid2 gridall default-color' ></div>
          <div className='grid3 gridall default-color'></div>
          <div className='grid4 gridall default-color'> </div>
          <button className={"grid5 gridall default-color"} >
          </button>
          <button className="grid6 gridall default-color ">
            <span className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></span>
          </button>
          <button className="grid7 gridall default-color">
            <span className='teacher_logo'><img src={require('./academics.png')} alt="test" /></span>
          </button>
      </div>
        ))
    } else if(num == 6) {
      content =
        period_6Students.map((student, index) => (
          <div className="student" key={index}>
          <div className='grid1' key={index} >
            {student.fname}
          </div>
          <div className='grid2 gridall default-color' ></div>
          <div className='grid3 gridall default-color'></div>
          <div className='grid4 gridall default-color'> </div>
          <button className={"grid5 gridall default-color"} >
          </button>
          <button className="grid6 gridall default-color ">
            <span className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></span>
          </button>
          <button className="grid7 gridall default-color">
            <span className='teacher_logo'><img src={require('./academics.png')} alt="test" /></span>
          </button>
      </div>
        ))
    } else if(num == 7) {
      content =
        period_7Students.map((student, index) => (
          <div className="student" key={index}>
          <div className='grid1' key={index} >
            {student.fname}
          </div>
          <div className='grid2 gridall default-color' ></div>
          <div className='grid3 gridall default-color'></div>
          <div className='grid4 gridall default-color'> </div>
          <button className={"grid5 gridall default-color"} >
          </button>
          <button className="grid6 gridall default-color ">
            <span className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></span>
          </button>
          <button className="grid7 gridall default-color">
            <span className='teacher_logo'><img src={require('./academics.png')} alt="test" /></span>
          </button>
      </div>
        ))
    }else{
      content = null;
    }

  }, [activeSwitch])

  return (
    
    //Start for the periods in a class
  <div>
    <div className="classroom">
      <div className="periods">
        <p style={{ color: 'white' }}>Teacher ID: {teacherID}</p>
        {switches.map((isOn, index) => (
          <div key={index} className={`period ${isOn ? 'on' : 'off'}`}
            onClick={() => handleSwitchClick(index)}> 
            Period {index}
          </div>
        ))}
      </div>
      {/* End of Period section */}
          
    {/* Start of Student section */}
    <div className="student-grid">
      {content}
    </div>
    
    </div>
    </div>
  );
  
}

export default TeacherView