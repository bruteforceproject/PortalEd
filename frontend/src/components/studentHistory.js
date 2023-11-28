// studentHistory.js
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./studentHistory.css";
import { useNavigate, useLocation } from "react-router-dom";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ onRangeChange }) => {
  return (
    <div style={{ height: "50vh", width: "50vw", margin: "auto" }}>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", width: "100%" }}
        defaultView="month"
        onRangeChange={onRangeChange}
      />
    </div>
  );
};

const StudentHeader = ({ studentName, studentId }) => {
  return (
    <header className="student-header">
      <h1>{studentName}</h1>
      <h2>ID: {studentId}</h2>
    </header>
  );
};

const GoBack = ({studentData, userRole}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/studentOverview", {state: {myData: studentData, userRole: userRole}});
  };

  return (
    <button className="go-back-button" onClick={handleClick}>
      Go back to Student Overview
    </button>
  );
};

const GoBackhome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button className="go-back-button-home" onClick={handleClick}>
      Go back to home page
    </button>
  );
};

const EventTile = ({ date, status }) => {
  const formattedDate = moment(date).format("dddd, MM/DD/YYYY");

  const getStatusColor = (status) => {
    switch (status) {
      case "good":
        return "green";
      case "satisfactory":
        return "yellow";
      case "bad":
        return "red";
      default:
        return "black";
    }
  };

  return (
    <div className="event-tile">
      <div
        style={{
          height: "12px",
          width: "12px",
          borderRadius: "50%",
          backgroundColor: getStatusColor(status),
          marginRight: "0.5rem",
        }}
      ></div>
      <span>{formattedDate}</span>
    </div>
  );
};

const StudentHistory = () => {
  // Set the student's name and ID as example

  const [studentData, setStudentData] = useState({});
  const location = useLocation();
  const userRole = location.state?.userRole;

  useEffect(() => {
    console.log(location);
    setStudentData(location.state.myData);
  }, []);

  const studentName = studentData.fname + " " + studentData.lname;
  // const studentName = "Ramez";
  const studentId = studentData.studentID;
  // const studentId = "1";
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  const handleRangeChange = (range) => {
    setDateRange({ start: moment(range.start), end: moment(range.end) });
  };

  //Events manually added for testing purposes: used to see if boxes filter based on calander range
  const events = [
    { date: "2023-04-10", status: "good", category: "Attendance" },
    { date: "2023-04-11", status: "bad", category: "Attendance" },
    { date: "2023-04-12", status: "satisfactory", category: "Attendance" },
    { date: "2023-04-10", status: "good", category: "Academic" },
    { date: "2023-04-11", status: "bad", category: "Academic" },
    { date: "2023-04-12", status: "satisfactory", category: "Academic" },
    { date: "2023-04-10", status: "good", category: "Behavior" },
    { date: "2023-04-11", status: "bad", category: "Behavior" },
    { date: "2023-04-12", status: "satisfactory", category: "Behavior" },
    { date: "2023-04-13", status: "good", category: "Behavior" },
    { date: "2023-04-14", status: "bad", category: "Behavior" },
    { date: "2023-04-15", status: "good", category: "Behavior" },
    { date: "2023-04-16", status: "good", category: "Behavior" },
    { date: "2023-04-17", status: "bad", category: "Behavior" },
    { date: "2023-04-18", status: "bad", category: "Behavior" },

    { date: "2023-05-10", status: "good", category: "Attendance" },
    { date: "2023-05-11", status: "bad", category: "Attendance" },
    { date: "2023-05-12", status: "satisfactory", category: "Attendance" },
    { date: "2023-05-10", status: "good", category: "Academic" },
    { date: "2023-05-16", status: "good", category: "Behavior" },
    { date: "2023-05-17", status: "bad", category: "Behavior" },
    { date: "2023-05-18", status: "bad", category: "Behavior" },
    // ... add more events
  ];

  const filteredEvents = events.filter((event) => {
    const eventDate = moment(event.date);
    if (!dateRange.start || !dateRange.end) {
      return true;
    }
    return eventDate.isBetween(dateRange.start, dateRange.end, "day", "[]");
  });

  const renderEventTiles = (category) => {
    return filteredEvents
      .filter((event) => event.category === category)
      .map((event, index) => (
        <EventTile key={index} date={event.date} status={event.status} />
      ));
  };

  return (
    <>
      <StudentHeader studentName={studentName} studentId={studentId} />
      <div className="calendar-container">
        <MyCalendar onRangeChange={handleRangeChange} />
      </div>
      <div>
        <div className="container">
          <div className="box-container">
            <label>Academic</label>
            <div className="box">{renderEventTiles("Academic")}</div>
          </div>
          <div className="box-container">
            <label>Behavior</label>
            <div className="box">{renderEventTiles("Behavior")}</div>
          </div>
          <div className="box-container">
            <label>Attendance</label>
            <div className="box">{renderEventTiles("Attendance")}</div>
          </div>
        </div>
        <GoBack studentData={studentData} userRole={userRole}/>
      </div>
      <GoBackhome />
    </>
  );
};

export default StudentHistory;
