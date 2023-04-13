import React from 'react'
import './teacherView.css'

const teacherView = () => {
  const students = [...Array(35).keys()]; // create array of 35 students

  return (
    <div className="classroom">
      <div className="period-buttons">
        {[...Array(8).keys()].map((i) => (
          <div className="button" key={i}>
            Period {i + 1}
          </div>
        ))}
      </div>
      <div className="student-grid">
        {students.map((i) => (
          <div className="student" key={i}>
            Student {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default teacherView