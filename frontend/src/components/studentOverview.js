import React from 'react';
import './studentOverview.css';
import {Link} from "react-router-dom";
//Class names, Student Name, and Teacher names will be accessed from DB
//need to add logos similar to ones in our mockup
//need to style
//need to link buttons to appropriate page
function studentOverview() {
  return (
    
    <html>
    <header>
        <div className="headLink">
        <a href="studentHistory.js">
            <span class="link"></span>
        </a>
        <h2>Student Name: Ariel Manalo &nbsp;&nbsp; Student ID Number: 301149641</h2>
        </div>
    </header>
    <body>
    <div>
      <div></div>
      <div className='Period0'>
          <p><b>Period 0: </b>Chemistry</p>
          <p><b>Teacher Name: </b>B. Banana</p>
      </div>
      <div className='Period1'>
          <p><b>Period 1: </b>Biology</p>
          <p><b>Teacher Name: </b>A. Apple</p>
      </div>
      <div className='Period2'>
          <p><b>Period 2: </b>Math</p>
          <p><b>Teacher Name: </b>C. Cherry</p>
      </div>
      <div className='Period3'>
          <p><b>Period 3: </b>English</p>
          <p><b>Teacher Name: </b>M. Mango</p>
      </div>
      <div className='Period4'>
          <p><b>Period 4: </b>Art</p>
          <p><b>Teacher Name: </b>O. Orange</p>
      </div>
      <div className='Period5'>
          <p><b>Period 5: </b>Physical Education</p>
          <p><b>Teacher Name: </b>W. Watermelon</p>
      </div>
      <div className='Period6'>
          <p><b>Period 6: </b>History</p>
          <p><b>Teacher Name: </b>D. Dragonfruit</p>
      </div>
      <div className='Period7'>
          <p><b>Period 7: </b>Elective</p>
          <p><b>Teacher Name: </b>B. Blueberry</p>
      </div>
    </div>
    </body>
    </html>
  )
}
export default studentOverview;