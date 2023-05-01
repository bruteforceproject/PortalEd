import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './acknowledgeView.css';
import './studentOverview';

const AcknowledgeView = () => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const navigate = useNavigate();

  const proceedToNextView = () => {
    if (checkbox1 && checkbox2) {
      navigate('/studentOverview');
    }
  };

  return (
    <div className="acknowledge-view">
      <h1>You Must Acknowledge the Alerts to Proceed</h1>
      <br></br>
      <p> Jane Doe has 2 infractions that must be acknowledged</p>
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