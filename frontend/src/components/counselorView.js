import React, { useState, useEffect } from "react";
import logo from "../logo1.png";
import { useNavigate } from "react-router-dom";
import "./counselorView.css";

function CounselorView() {
  const [studentData, setStudentData] = useState("");
  const [studentID, setStudentID] = useState("");
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
      .then((response) => {
        try {
          // console.log("Worked");
          // console.log(studentData);
          setStudentData(response);
        } catch (err) {
          console.log(err);
        }
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
                console.log(e.target.value);
                setStudentID(e.target.value);
              }}
            />
            <button
              onClick={async () => {
                if (studentID.length !== 0) {
                  getData();
                  console.log(studentData);
                  navigate("/studentHistory", {
                    state: { myData: studentData },
                  });
                }
              }}
              className="button_cou"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CounselorView;
