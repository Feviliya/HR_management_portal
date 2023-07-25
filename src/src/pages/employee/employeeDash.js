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

export default EmployeeDash