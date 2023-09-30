import React, { useState } from "react";
import logo from "./logo1.png";
import { useNavigate } from "react-router-dom";
import "./counselorView.css";

function CounselorView() {
  const [studentData, setStudentData] = useState({});
  const [studentID, setStudentID] = useState("");
  const [recordFound, setRecordFound] = useState(false);
  const navigate = useNavigate();

  async function getData() {
    await fetch(`http://localhost:5000/getStudents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: studentID,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(studentData);
        setStudentData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container_cou">
      <div className="header-right_cou">
        <button className="button_cou">Log Out</button>
      </div>
      <div className="header-center_cou">
        <img src={logo} alt="logo" />
        <div>
          <div className="label_container_cou">
            <label className="student_id_text_cou">Student ID:</label>
          </div>
          <div className="search-bar_cou">
            <input
              className="input_search_cou"
              placeholder="Search..."
              type="text"
              id="student-id"
              name="student-id"
              onChange={(e) => {
                setStudentID(e.target.value);
              }}
            />

            {recordFound ? (
              // if data exist then it will navigate to student history view.
              <button
                onClick={async () => {
                  if (studentID.length !== 0 && studentData.length !== 0) {
                    navigate("/studentHistory", {
                      state: { myData: studentData },
                    });
                  }
                }}
                className="button_cou"
                type="submit"
              >
                Continue
              </button>
            ) : (
              // verify data exists by search click
              <button
                onClick={async () => {
                  if (studentID.length !== 0) {
                    await getData();
                    // console.log(studentData);
                    if (JSON.stringify(studentData) !== "{}") {
                      setRecordFound(true);
                    } else {
                      setRecordFound(false);
                    }
                  }
                }}
                className="button_cou"
                type="submit"
              >
                Search
              </button>
            )}
          </div>
          <div className="search-bar_cou">
            <h3>{recordFound}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CounselorView;
