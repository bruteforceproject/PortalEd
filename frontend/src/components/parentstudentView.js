import React, { useState } from 'react';
import './parentstudentView.css';

//import {Link} from "react-router-dom";
import logo from '../logocropped.png';

//Class names, Student Name, and Teacher names will be accessed from DB
//need to add logos similar to ones in our mockup
//need to style
//need to link buttons to appropriate page


const CircleWidget1 = () => {
    const [clickCount, setClickCount] = useState(0);
  
    const handleClick = () => {
      setClickCount(clickCount + 1);
    };
  
    let circleColor = '#ccc';
    if (clickCount === 1) {
      circleColor = '#f00';
    } else if (clickCount === 2) {
      circleColor = '#0f0';
    } else if (clickCount === 3) {
      circleColor = '#00f';
      setClickCount(0); // reset click count after third click
    }
  
    return (
      <div className="circle" style={{ backgroundColor: circleColor }} onClick={handleClick}>
        <img src={require('./academics.png')} alt="test" />
      </div>
    );
  }
  const CircleWidget2 = () => {
    const [clickCount, setClickCount] = useState(0);
  
    const handleClick = () => {
      setClickCount(clickCount + 1);
    };
  
    let circleColor = '#ccc';
    if (clickCount === 1) {
      circleColor = '#f00';
    } else if (clickCount === 2) {
      circleColor = '#0f0';
    } else if (clickCount === 3) {
      circleColor = '#00f';
      setClickCount(0); // reset click count after third click
    }
  
    return (
      <div className="circle" style={{ backgroundColor: circleColor }} onClick={handleClick}>
        <img src={require('./attendance.png')} alt="test" />
      </div>
    );
  }
  const CircleWidget3 = () => {
    const [clickCount, setClickCount] = useState(0);
  
    const handleClick = () => {
      setClickCount(clickCount + 1);
    };
  
    let circleColor = '#ccc';
    if (clickCount === 1) {
      circleColor = '#f00';
    } else if (clickCount === 2) {
      circleColor = '#0f0';
    } else if (clickCount === 3) {
      circleColor = '#00f';
      setClickCount(0); // reset click count after third click
    }
  
    return (
      <div className="circle" style={{ backgroundColor: circleColor }} onClick={handleClick}>
        <img src={require('./behavior.png')} alt="test" />
      </div>
    );
  }


function parentstudentView() {
  return (
    
    <html>
    
        <img src={logo} className="parentstudentLogo" alt="logo" />
        
        <h1 class="studentName" style={{marginTop: 0}}>
          Jane Doe testing
        </h1>
    <body>
    <div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 0: </b><br></br>Chemistry</p>  
          <p><b>Teacher Name: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidget1 />
            <CircleWidget2 />
            <CircleWidget3 />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 1: </b><br></br>Chemistry</p>  
          <p><b>Teacher Name: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidget1 />
            <CircleWidget2 />
            <CircleWidget3 />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 2: </b><br></br>Chemistry</p>  
          <p><b>Teacher Name: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidget1 />
            <CircleWidget2 />
            <CircleWidget3 />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 3: </b><br></br>Chemistry</p>  
          <p><b>Teacher Name: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidget1 />
            <CircleWidget2 />
            <CircleWidget3 />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 4: </b><br></br>Chemistry</p>  
          <p><b>Teacher Name: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidget1 />
            <CircleWidget2 />
            <CircleWidget3 />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 5: </b><br></br>Chemistry</p>  
          <p><b>Teacher Name: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidget1 />
            <CircleWidget2 />
            <CircleWidget3 />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 6: </b><br></br>Chemistry</p>  
          <p><b>Teacher Name: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidget1 />
            <CircleWidget2 />
            <CircleWidget3 />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 7: </b><br></br>Chemistry</p>  
          <p><b>Teacher Name: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidget1 />
            <CircleWidget2 />
            <CircleWidget3 />
            </div>
    </div>
    </div>
    </body>
    </html>
  )
}
export default parentstudentView;