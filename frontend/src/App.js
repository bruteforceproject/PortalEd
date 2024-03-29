import logo from './logo.png';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

import StudentHistory from './components/studentHistory'; 
import StudentOverview from './components/studentOverview'

import teacherView from './components/teacherView'
import parentView from './components/parentView'
import parentstudentView from './components/parentstudentView'
import Home from './components/home'
import AcknowledgeView from './components/acknowledgeView'
import CounselorView from './components/counselorView';
import Login from "./pages/log-in";
import Register from "./pages/register";
import PasswordRecovery from "./pages/account-recovery-password";
import AccountIDRecovery from "./pages/account-recovery-accountid";
import YourAccountID from "./pages/account-recovery-your-account-id";
import Verify from "./pages/account-recovery-verify";
import NewPassword from "./pages/account-recovery-new-password";
import EnterCode from './pages/account-recovery-enter-code';

function App() {
  
  return (
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Login />} /> 
        <Route exact path="/log-in" element={<Login />} />

            <Route  exact path="/" Component={Login} /> 
            <Route  exact path = "/log-in" Component = {Login} />
            <Route  exact path = "/register" Component = {Register} />
            <Route  exact path = "/account-recovery/password" Component = {PasswordRecovery} />
            <Route  exact path = "/account-recovery/account-id" Component = {AccountIDRecovery} />
            <Route  exact path = "/account-recovery/verify" Component = {Verify} />
            <Route  exact path = "/account-recovery/enter-code" Component = {EnterCode} />
            <Route  exact path = "/account-recovery/new-password" Component = {NewPassword} />
            <Route  exact path = "/account-recovery/your-account-id" Component = {YourAccountID} />
             <Route  exact path="/studentOverview" Component={StudentOverview} /> 
            {/* Route exact path="/studentOverview/:studentId" element={<StudentOverview />} */}
            

            <Route  exact path="/counselorView" Component={CounselorView} />  
            <Route path="/acknowledgeView/:studentId" element={<AcknowledgeView />} />
            <Route  exact path="/teacherView" Component={teacherView} /> 
            <Route  exact path="/parentView" Component={parentView} />
            <Route  exact path="/parentstudentView" Component={parentstudentView} />
            <Route  exact path="/studentHistory" element={<StudentHistory />} />
            <Route  exact path="/home" Component={Home} /> 
        </Routes> 
    </div>
  );
}
export default App;