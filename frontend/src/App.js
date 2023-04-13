import logo from './logo.png';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

import studentOverview from './Components/studentOverview'
import teacherView from './Components/teacherView'
import home from './Components/home'



function App() {
  
  return (
    <div className="App">
        <Routes>
            <Route  exact path="/" Component={home} /> 
            <Route  exact path="/studentOverview" Component={studentOverview} />  
            <Route  exact path="/teacherView" Component={teacherView} /> 
        </Routes> 
    </div>
  );
}
export default App;

