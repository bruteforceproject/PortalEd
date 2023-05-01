import React from 'react';
import './studentOverview.css';
//import './academics.png';

import {Link} from "react-router-dom";
//Class names, Student Name, and Teacher names will be accessed from DB
function studentOverview() {
  return (
    
    <html>
        
    <header>
        <div className="headLink">
        <a href="studentHistory">
            <span class="link"></span>
        </a>
        <h2><span class = "name">Ariel Manalo</span> &nbsp;&nbsp; <span class = "id">ID: 304314933</span></h2>
        
        </div>
    </header>
    <body>
    <div>
      <div className='Period'>
          <p><b>Period 0:  </b>Chemistry</p>   
          <div class = "image-container">
            <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
            <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
            <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
          </div>
          <p><b>Teacher Name: </b>B. Banana  </p>
      </div>
      <div className='Period'>
          <p><b>Period 1: </b>Biology</p>
          <div class = "image-container">
            <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
            <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
            <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
          </div>
          <p><b>Teacher Name: </b>A. Apple</p>
      </div>
      <div className='Period'>
          <p><b>Period 2: </b>Math</p>
          <div class = "image-container">
            <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
            <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
            <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
          </div>
          <p><b>Teacher Name: </b>C. Cherry</p>
      </div>
      <div className='Period'>
          <p><b>Period 3: </b>English</p>
          <div class = "image-container">
            <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
            <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
            <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
          </div>
          <p><b>Teacher Name: </b>M. Mango</p>
      </div>
      <div className='Period'>
          <p><b>Period 4: </b>Art</p>
          <div class = "image-container">
            <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
            <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
            <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
          </div>
          <p><b>Teacher Name: </b>O. Orange</p>
      </div>
      <div className='Period'>
          <p><b>Period 5: </b>Physical Education</p>
          <div class = "image-container">
            <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
            <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
            <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
          </div>
          <p><b>Teacher Name: </b>W. Watermelon</p>
      </div>
      <div className='Period'>
          <p><b>Period 6: </b>History</p>
          <div class = "image-container">
            <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
            <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
            <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
          </div>
          <p><b>Teacher Name: </b>D. Dragonfruit</p>
      </div>
      <div className='Period'>
          <p><b>Period 7: </b>Elective</p>
          <div class = "image-container">
            <span className='academicsImg'><img src={require('./academics.png')} alt="test" /></span>
            <span className='attendanceImg'><img src={require('./attendance.png')} alt="test" /></span>
            <span className='behaviorImg'><img src={require('./behavior.png')} alt="test" /></span>
          </div>
          <p><b>Teacher Name: </b>B. Blueberry</p>
      </div>
    </div>
    </body>
    </html>
  )
}
export default studentOverview;