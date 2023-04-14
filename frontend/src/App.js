import logo from './logo.png';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

//import studentOverview from './Components/studentOverview'
import StudentHistory from './components/studentHistory'; 
import studentOverview from './components/studentOverview'
import teacherView from './components/teacherView'
import parentView from './components/parentView'
import home from './components/home'



function App() {
  
  return (
    <div className="App">
        <Routes>
            <Route  exact path="/" Component={home} /> 
            <Route  exact path="/studentOverview" Component={studentOverview} />  
            <Route  exact path="/teacherView" Component={teacherView} /> 
            <Route  exact path="/parentView" Component={parentView} />
            <Route exact path="/studentHistory" element={<StudentHistory />} />
        </Routes> 
    </div>
  );
}
export default App;

