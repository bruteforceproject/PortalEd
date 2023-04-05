import React from 'react';

//Class names, Student Name, and Teacher names will be accessed from DB
//need to add logos similar to ones in our mockup
//need to style
//need to link buttons to appropriate page
function studentOverview() {
  return (
    
    <div>
      <h1>Student Overview</h1>
      <div><h2>Student Name</h2></div>
      <div className='Period0'>
          <p>Period 0: Chemistry</p>
          <p>Teacher name: </p>
      </div>
      <div className='Period1'>
          <p>Period 1: Biology</p>
          <p>Teacher name: </p>
      </div>
      <div className='Period2'>
          <p>Period 2: Math</p>
          <p>Teacher name: </p>
      </div>
      <div className='Period3'>
          <p>Period 3: English</p>
          <p>Teacher name: </p>
      </div>
      <div className='Period4'>
          <p>Period 4: Art</p>
          <p>Teacher name: </p>
      </div>
      <div className='Period5'>
          <p>Period 5: Physical Education</p>
          <p>Teacher name: </p>
      </div>
      <div className='Period6'>
          <p>Period 6: History</p>
          <p>Teacher name: </p>
      </div>
      <div className='Period7'>
          <p>Period 7: Elective</p>
          <p>Teacher name: </p>
      </div>
    </div>
  )
}
export default studentOverview;