import React from 'react'
import './teacherView.css'
import { Link } from 'react-router-dom';

const teacherView = () => {
  const students = [...Array(35).keys()]; // create array of 35 students

  return (
    <div className="classroom">
      <div className="period-buttons">
        {[...Array(8).keys()].map((i) => (
          <div className="button" key={i}>
            Period {i}
          </div>
        ))}
      </div>
      <div className="student-grid">
        {students.map((i) => (
          <div className="student" key={i}>
            <div className='grid1'>
              <Link to="/parentstudentView" className='grid1'>
                Student {i + 1}
              </Link>
            </div>
            <div className='grid2 gridall'>
            </div>
            <div className='grid3 gridall'>
              
            </div>
            <div className='grid4 gridall'>
              
            </div>
    
            <div className='grid5 gridall '>
              <Link to="/studentHistory" className='teacher_logo'><img src={require('./attendance.png')} alt="test" /></Link>
            </div>
            <div className='grid6 gridall'>
              <Link to="/studentHistory" className='teacher_logo'><img src={require('./behavior.png')} alt="test" /></Link>
            </div>
            <div className='grid7 gridall'>
              <Link to="/studentHistory" className='teacher_logo'><img src={require('./academics.png')} alt="test" /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default teacherView