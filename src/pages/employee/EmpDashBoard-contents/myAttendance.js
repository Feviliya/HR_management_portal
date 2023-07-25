import React from 'react'
import AttendanceContents from '../../../components/employee/attendance'
import Navbar from '../../../components/employee/navbar'
import SidePanelEmp from '../../../components/employee/sidepanelEmp'
const MyAttendance = () => {
  return (
    <div className='my-attendance'>
        <Navbar></Navbar>
        <div style={{'display':"flex"}}>
            <SidePanelEmp></SidePanelEmp>
            <AttendanceContents></AttendanceContents>
        </div>
    </div>
  )
}

export default MyAttendance