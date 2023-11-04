import React, { useEffect, useState } from "react";
import logo from "../logo1.png";
import { useNavigate } from "react-router-dom";
import "./counselorView.css";

function CounselorView() {
  const [studentID, setStudentID] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  async function getData() {
    await fetch(`http://localhost:8000/getStudents`, {
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
        if (data) {
          console.log("testing",data)
          navigate("/studentOverview", {
            state: { myData: data },
          });
        } else {
          alert("Error: \nStudent ID is not Found!");
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container_cou">
      <div className="header-right_cou">
        <button
          className="button_cou"
          onClick={() => {
            navigate("/");
          }}
        >
          Log Out
        </button>
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

            {
              // verify data exists by search click
              <button
                onClick={async () => {
                  if (studentID) {
                    await getData();
                  }
                }}
                className="button_cou"
                type="submit"
              >
                Search
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default CounselorView;
