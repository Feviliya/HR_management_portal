<<<<<<< HEAD
import React from 'react'
// import PersonalDetails from '../../components/employee/personalDetails'
import Navbar from '../../components/employee/navbar'
import SidePanelEmp from '../../components/employee/sidepanelEmp'
import DashEmpContents from './EmpDashBoard-contents/dashEmpContents';
const EmployeeDash = () => {
  return (
    <div>
      <div id='display-details' >
      <Navbar></Navbar>
      <div style={{'display':"flex"}}>
      <SidePanelEmp></SidePanelEmp>
      <DashEmpContents></DashEmpContents>

      </div>
    </div>
    </div>
  )
}

=======
import React from 'react'
// import PersonalDetails from '../../components/employee/personalDetails'
import Navbar from '../../components/employee/navbar'
import SidePanelEmp from '../../components/employee/sidepanelEmp'
import DashEmpContents from './EmpDashBoard-contents/dashEmpContents';
const EmployeeDash = () => {
  return (
    <div>
      <div id='display-details' >
      <Navbar></Navbar>
      <div style={{'display':"flex"}}>
      <SidePanelEmp></SidePanelEmp>
      <DashEmpContents></DashEmpContents>

      </div>
    </div>
    </div>
  )
}

>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
export default EmployeeDash