import logo from './logo.png';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

import studentOverview from './components/studentOverview';
import home from './components/home'



function App() {
  
  return (
    <div className="App">
        <Routes>
            <Route  exact path="/" Component={home} /> 
            <Route  exact path="/studentOverview" Component={studentOverview} />   
        </Routes> 
    </div>
  );
}
export default App;

