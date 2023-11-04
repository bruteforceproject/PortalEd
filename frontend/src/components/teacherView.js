import React from 'react'
import './teacherView.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
//import { GrValidate } from "react-icons/gr"; 
//import axios from 'axios'



const TeacherView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //??Need the count of students
  const students = [...Array(20).keys()]; // create array of 35 students
  const [teacherID, setTeacherID] = useState('null'); // Initialize as an empty string
  const [period0, setperiod0] = useState('null'); 
  const [period1, setperiod1] = useState('null'); 
  const [period_0Students, setperiod_0Students] = useState([]);


  // const [clickCount, setClickCount] = useState(0);
  // const [clickTimeout, setClickTimeout] = useState(null);
  // let [buttonClassName, setbuttonClassName] = useState('default-color');

  // useEffect(() => {
  //   if (clickCount === 3) {
  //     setbuttonClassName('color-red');
  //     clearTimeout(clickTimeout);
  //     setClickTimeout(null);
  //     setClickCount(0);
  //   } else if (clickCount === 2) {
  //     if (!clickTimeout) {
  //       const timeoutId = setTimeout(() => {
  //         setbuttonClassName('color-yellow');
  //         setClickCount(0);
  //         setClickTimeout(null);
  //       }, 10);
  //       setClickTimeout(timeoutId);
  //     }
  //   } else if (clickCount === 1) {
  //     if (!clickTimeout) {
  //       const timeoutId = setTimeout(() => {
  //         setbuttonClassName('color-green');
  //         setClickTimeout(null);
  //       }, 1000);
  //       setClickTimeout(timeoutId);
  //     }
  //   }
  // }, [clickCount, clickTimeout]);

  // const handleClick = (i) => {
  //   setClickCount(prevCount => prevCount + 1);
  // };

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
      body: JSON.stringify({ period0 }), // Send the period_0 value in the request body
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response contains the list of first names
        const period_0Students = data;
        console.log('Student First Names:', period_0Students);
        setperiod_0Students(period_0Students);

        // Now you can use studentFirstNames in your component state or render them as needed
        setTeacherID(location.state.teacher_id);
        setperiod0(location.state.period0);
        setperiod1(location.state.period1);
  
        if (activeSwitch !== null) {
          const updatedSwitches = [...switches];
          updatedSwitches[activeSwitch] = true;
          setSwitches(updatedSwitches);
        }
      })
      .catch((error) => {
        console.error('Error fetching student data by period:', error);
        // Handle error appropriately, e.g., set an error state
      });
  }, [period0, activeSwitch, switches, location.state.teacher_id, location.state.period0, location.state.period1]);
  



  
  const handleSwitchClick = (index) => {
    if (activeSwitch === null) {
      const turnOn = window.confirm(`Start the Period ${index}`);
      if (turnOn) {
        setActiveSwitch(index);
      }
    } else if (activeSwitch === index) {
      alert("Finishing the Period will save all the data of Atendance, Behaviour, and Academic");
      const turnOff = window.confirm(`Are you sure that you want to finish the Period ${index}`);
      if (turnOff) {
        setActiveSwitch(null);
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



  return (
    
    //Start for the periods in a class
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
  {period_0Students.map((student, index) => (
    <div className="student" key={index}>
      <div className='grid1'>
      <div
                className='grid1'
                onClick={async () => {
                  if (student.studentID) {
                    await getData(student.studentID);
                  }

                }}
              >
                {student.fname}
              </div>
      </div>
      <div className='grid2 gridall default-color'></div>
      <div className='grid3 gridall default-color'></div>
      <div className='grid4 gridall default-color'> </div>
      <button className={"grid5 gridall default-color"} >
        {/*<span className='teacher_logo'><GrValidate/></span>*/}
      </button>
      <button className="grid6 gridall default-color ">
        <span className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></span>
      </button>
      <button className="grid7 gridall default-color">
        <span className='teacher_logo'><img src={require('./academics.png')} alt="test" /></span>
      </button>
    </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherView