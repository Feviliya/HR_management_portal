
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing';
import AdminLogin from './pages/admin/adminLogin';
import EmployeeLogin from './pages/employee/employeeLogin';
import EmployeeDash from './pages/employee/employeeDash';
import { AdminAddUser } from './pages/admin/adminAddUser';
import PersonalDetails from './pages/employee/EmpDashBoard-contents/personalDetails';
import MyAttendance from './pages/employee/EmpDashBoard-contents/myAttendance';
import MyPerformance from './pages/employee/EmpDashBoard-contents/myPerformance';
import MyTraining from './pages/employee/EmpDashBoard-contents/myTraining';
import MyBenefits from './pages/employee/EmpDashBoard-contents/myBenefit';
import MySalary from './pages/employee/EmpDashBoard-contents/mySalary';
import CourseOpen from './components/employee/courseOpen';
import EmpConnect from './pages/employee/EmpDashBoard-contents/empConnect';
function App() {
  return (
          <BrowserRouter>
          <Routes> 
            <Route path='/' element={<Landing></Landing>}/>
            <Route path='/employee' element={<EmployeeLogin></EmployeeLogin>}/>;
            <Route path='/admin' element={<AdminLogin></AdminLogin>}/>;
            <Route path='/admin/add-user' element={<AdminAddUser></AdminAddUser>}/>;
            <Route path='/employee/dashboard' element={<EmployeeDash></EmployeeDash>}/>
            <Route path='/employee/dashboard/updateProfile' element={<PersonalDetails></PersonalDetails>}></Route>
            <Route path='/employee/dashboard/myattendance' element={<MyAttendance></MyAttendance>}></Route>
            <Route path='/employee/dashboard/myperformance' element={<MyPerformance></MyPerformance>}></Route>
            <Route path='/employee/dashboard/myTraining' element={<MyTraining></MyTraining>}></Route>
            <Route path='/employee/dashboard/myBenefits' element={<MyBenefits></MyBenefits>}></Route>
            <Route path='/employee/dashboard/mySalary' element={<MySalary></MySalary>}></Route>
            <Route path='/employee/dashboard/myTraining/course' element={<CourseOpen></CourseOpen>}></Route>
            
            <Route path='/employee/dashboard/connect' element={<EmpConnect></EmpConnect>}></Route>
          </Routes>
        </BrowserRouter>
        
    
  );
}

export default App;
