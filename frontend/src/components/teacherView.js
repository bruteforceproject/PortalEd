import React from 'react'
import './teacherView.css'
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';

const TeacherView = () => {
  const students = [...Array(55).keys()]; // create array of 35 students
  const [clickCount, setClickCount] = useState(0);
  const [clickTimeout, setClickTimeout] = useState(null);
  let [buttonClassName, setbuttonClassName] = useState('default-color');

  useEffect(() => {
    if (clickCount === 3) {
      setbuttonClassName('color-three');
      clearTimeout(clickTimeout);
      setClickTimeout(null);
      setClickCount(0);
    } else if (clickCount === 2) {
      if (!clickTimeout) {
        const timeoutId = setTimeout(() => {
          setbuttonClassName('color-two');
          setClickCount(0);
          setClickTimeout(null);
        }, 10);
        setClickTimeout(timeoutId);
      }
    } else if (clickCount === 1) {
      if (!clickTimeout) {
        const timeoutId = setTimeout(() => {
          setbuttonClassName('color-one');
          setClickTimeout(null);
        }, 1000);
        setClickTimeout(timeoutId);
      }
    }
  }, [clickCount, clickTimeout]);

  const handleClick = (i) => {
    setClickCount(prevCount => prevCount + 1);
  };


  return (
    <div className="classroom">
      <div className="period-buttons">
        {[...Array(8).keys()].map((j) => (
          <div className="button" key={j}>
            Period {j}
          </div>
        ))}
      </div>
      <div className="student-grid">
        {students.map((i) => (
          <div className="student" key={i}>
            <div className='grid1'>
              <Link to="/parentstudentView" className='grid1'>Student {i + 1}</Link>
            </div>
            <div className='grid2 gridall'></div>
            <div className='grid3 gridall'></div>
            <div className='grid4 gridall'> </div>
            <button className={`grid5 gridall default-color ${buttonClassName}`} onClick={handleClick} >
              <span className='teacher_logo' ><img src={require('./attendance.png')} alt="test" /></span>
            </button>
            <button className="grid6 gridall ">
              <span className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></span>
            </button>
            <button className="grid7 gridall">
              <span className='teacher_logo'><img src={require('./academics.png')} alt="test" /></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherView