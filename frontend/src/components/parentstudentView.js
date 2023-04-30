import React, { useState, useEffect } from 'react';
import './parentstudentView.css';
import {Link} from "react-router-dom";
import logo from '../logocropped.png';


//Class names, Student Name, and Teacher names will be accessed from DB
//need to link buttons to appropriate page


/*const CircleWidgetBETA = () => {
    const [clickCount, setClickCount] = useState(0);
  
    const handleClick = () => {
      setClickCount(clickCount + 1);
     
    };
  
    let circleColor = '#ccc';        //blank (no color)
    if (clickCount === 1) {
      circleColor = '#FAB7A9';         //color red 
    } else if (clickCount === 2) {
      circleColor = '#FFFFB1';            // color yellow 
    } else if (clickCount === 3) {
      circleColor = '#6AE16D';               // color green
    }
      else if(clickCount===4){
      circleColor = '#ccc'           
      setClickCount(0); // reset click count after fourth click
      } 
      
    return (
      <div className="circle" style={{ backgroundColor: circleColor }} onClick={handleClick}>
        <img src={require('./academics.png')} alt="test" />
      </div>
    );
    }
  */
    const CircleWidgetAttendance = () => {
      const [circleColor, setCircleColor] = useState('#ccc'); // Initial color is blank (no color)
    
      useEffect(() => {
        const randomColor = getRandomColor();
        setCircleColor(randomColor);
      }, []); // Run the effect only once on initial render
    
      const handleClick = () => {
        const randomColor = getRandomColor();
        setCircleColor(randomColor);
      };
    
      const getRandomColor = () => {
        const colors = ['#FAB7A9', '#FFFFB1', '#6AE16D']; // Available colors
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      };
    
      return (
        <div className="circle" style={{ backgroundColor: circleColor }} onClick={handleClick}>
          <img src={require('./attendance.png')} alt="test" />
        </div>
      );
    };


    const CircleWidgetBehavior = () => {
      const [circleColor, setCircleColor] = useState('#ccc'); // Initial color is blank (no color)
    
      useEffect(() => {
        const randomColor = getRandomColor();
        setCircleColor(randomColor);
      }, []); // Run the effect only once on initial render
    
      const handleClick = () => {
        const randomColor = getRandomColor();
        setCircleColor(randomColor);
      };
    
      const getRandomColor = () => {
        const colors = ['#FAB7A9', '#FFFFB1', '#6AE16D']; // Available colors
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      };
    
      return (
        <div className="circle" style={{ backgroundColor: circleColor }} onClick={handleClick}>
          <img src={require('./behavior.png')} alt="test" />
        </div>
      );
    };

    const CircleWidgetAcademics = () => {
      const [circleColor, setCircleColor] = useState('#ccc'); // Initial color is blank (no color)
    
      useEffect(() => {
        const randomColor = getRandomColor();
        setCircleColor(randomColor);
      }, []); // Run the effect only once on initial render
    
      const handleClick = () => {
        const randomColor = getRandomColor();
        setCircleColor(randomColor);
      };
    
      const getRandomColor = () => {
        const colors = ['#FAB7A9', '#FFFFB1', '#6AE16D']; // Available colors
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      };
    
      return (
        <div className="circle" style={{ backgroundColor: circleColor }} onClick={handleClick}>
          <img src={require('./academics.png')} alt="test" />
        </div>
      );
    };
    




  
function parentstudentView() {
  

  
  return (
    
    <html>
    
        <img src={logo} className="parentstudentLogo" alt="logo" />
        
        <h1 class="studentName" style={{marginTop: 0}}>
          Jane Doe
        </h1>
    <body>
    <div>
    
    <div className='studentparentPeriods' >
    <Link to="/studentHistory" style={{ textDecoration: 'none', color: 'black' }}>
        <div className='displayPeriodandName'>
          
          <p><b>Period 0: </b><br></br>Chemistry</p>  
          <p><b>Teacher: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidgetAttendance />
            <CircleWidgetBehavior />
            <CircleWidgetAcademics />
            </div>
            </Link>      
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 1: </b><br></br>Chemistry</p>  
          <p><b>Teacher: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidgetAttendance />
            <CircleWidgetBehavior />
            <CircleWidgetAcademics />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 2: </b><br></br>Chemistry</p>  
          <p><b>Teacher: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidgetAttendance />
            <CircleWidgetBehavior />
            <CircleWidgetAcademics />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 3: </b><br></br>Chemistry</p>  
          <p><b>Teacher: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidgetAttendance />
            <CircleWidgetBehavior />
            <CircleWidgetAcademics />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 4: </b><br></br>Chemistry</p>  
          <p><b>Teacher: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidgetAttendance />
            <CircleWidgetBehavior />
            <CircleWidgetAcademics />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 5: </b><br></br>Chemistry</p>  
          <p><b>Teacher: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidgetAttendance />
            <CircleWidgetBehavior />
            <CircleWidgetAcademics />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 6: </b><br></br>Chemistry</p>  
          <p><b>Teacher: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidgetAttendance />
            <CircleWidgetBehavior />
            <CircleWidgetAcademics />
            </div>
    </div>
    <div className='studentparentPeriods'>
        <div className='displayPeriodandName'>
          <p><b>Period 7: </b><br></br>Chemistry</p>  
          <p><b>Teacher: </b><br></br>B. Banana</p>
        </div>
            <div className="studentAverages">
            <CircleWidgetAttendance />
            <CircleWidgetBehavior />
            <CircleWidgetAcademics />
            </div>
    </div>
    </div>
    </body>
    </html>
  )
}
export default parentstudentView;