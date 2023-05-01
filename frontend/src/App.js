import logo from './logo.png';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

//import studentOverview from './Components/studentOverview'
import StudentHistory from './components/studentHistory'; 
import studentOverview from './components/studentOverview'
import teacherView from './components/teacherView'
import parentView from './components/parentView'
import parentstudentView from './components/parentstudentView'
import home from './components/home'
import AcknowledgeView from './components/acknowledgeView'
import CounselorView from './components/counselorView';
import Login from "./pages/log-in";
import PasswordRecovery from "./pages/account-recovery-password";
import AccountIDRecovery from "./pages/account-recovery-accountid";
import YourAccountID from "./pages/account-recovery-your-account-id";
import Verify from "./pages/account-recovery-verify";
import NotificationSent from "./pages/account-recovery-notification-sent";

function App() {
  
  return (
    <div className="App">
        <Routes>
            <Route  exact path="/" Component={home} /> 
            <Route  exact path = "/log-in" Component = {Login} />
            <Route  exact path = "/account-recovery/password" Component = {PasswordRecovery} />
            <Route  exact path = "/account-recovery/account-id" Component = {AccountIDRecovery} />
            <Route  exact path = "/account-recovery/verify" Component = {Verify} />
            <Route  exact path = "/account-recovery/notification-sent" Component = {NotificationSent} />
            <Route  exact path = "/account-recovery/your-account-id" Component = {YourAccountID} />
            <Route  exact path="/studentOverview" Component={studentOverview} /> 
            <Route  exact path="/counselorView" Component={CounselorView} />  
            <Route  exact path="/acknowledgeView" Component={AcknowledgeView} /> 
            <Route  exact path="/teacherView" Component={teacherView} /> 
            <Route  exact path="/parentView" Component={parentView} />
            <Route  exact path="/parentstudentView" Component={parentstudentView} />
            <Route  exact path="/studentHistory" element={<StudentHistory />} />
        </Routes> 
    </div>
  );
}
export default App;