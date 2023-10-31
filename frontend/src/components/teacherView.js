import React from 'react'
import './teacherView.css'
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
//import { GrValidate } from "react-icons/gr"; 
//import axios from 'axios'



const TeacherView = () => {

  //??Need the count of students
  const students = [...Array(20).keys()]; // create array of 35 students


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
    if (activeSwitch !== null) {
      const updatedSwitches = [...switches];
      updatedSwitches[activeSwitch] = true;
      setSwitches(updatedSwitches);
    }
  }, [activeSwitch, switches]);

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

  return (

    //Start for the periods in a class
    <div className="classroom">
      <div className="periods">
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
      {students.map((i) => (
        <div className="student" key={i}>
            <div className='grid1'>
              <Link to="/parentstudentView" className='grid1'>Student {i + 1}</Link>
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