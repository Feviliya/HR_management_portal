
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing';
import AdminMain from './pages/admin/adminMain';
import EmployeeMain from './pages/employee/employeeMain';
import EmployeeDash from './pages/employee/employeeDash';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing></Landing>}/>
      <Route path='/employee' element={<EmployeeMain></EmployeeMain>}/>;
      <Route path='/admin' element={<AdminMain></AdminMain>}/>;
      <Route path='/employee/dashboard' element={<EmployeeDash></EmployeeDash>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
