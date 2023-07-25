<<<<<<< HEAD
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

=======
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

>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
export default MyAttendance