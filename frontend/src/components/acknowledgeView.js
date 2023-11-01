import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import './acknowledgeView.css';
import './studentOverview';

const AcknowledgeView = () => {
  const location = useLocation();
  const student = location.state ? location.state.myData : null;

  const { studentId } = useParams();
  console.log("Student ID from path:", studentId);


  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const navigate = useNavigate();

  if (!student) {
    return <div>Student data is not available</div>;
  }
  

  const proceedToNextView = () => {
    if (checkbox1 && checkbox2) {
      navigate('/studentOverview');
    }
  };

  return (
    <div className="acknowledge-view">
      <h1>You Must Acknowledge the Alerts to Proceed</h1>
      <p>Student ID: {student.studentId}</p>
      <br></br>
      <p> {`${student.fname} ${student.lname}`} has 2 infractions that must be acknowledged</p>
      <label>
        <br></br>
        <p>Jane Doe was Absent from Period 3 Chemistry with Mr.Brimberry on 5/11</p>
       
        <input
          type="checkbox"
          checked={checkbox1}
          onChange={() => setCheckbox1(!checkbox1)}
        />
       
     
         I acknowledge the attendance infraction above
      </label>
      <br />
      <label>
        <br></br>
        <p>Jane Doe engaged in violent activity against a student in History with Ms. Frizzle on 5/12 </p>
        <input
          type="checkbox"
          checked={checkbox2}
          onChange={() => setCheckbox2(!checkbox2)}
        />
        I acknowledge the behavioral infraction above
      </label>
      <br />
      <br></br>
      <button onClick={proceedToNextView} disabled={!checkbox1 || !checkbox2}>
        Submit
      </button>
    </div>
  );
};

export default AcknowledgeView;