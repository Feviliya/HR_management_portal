import React from 'react'
import Navbar from '../../../components/employee/navbar'
import SidePanelEmp from '../../../components/employee/sidepanelEmp'
import Salary from '../../../components/employee/salary'
const MySalary = () => {
  return (
    <div className='mysalary'>
        <Navbar></Navbar>
      <div style={{'display':"flex"}}>
        <SidePanelEmp></SidePanelEmp>
        <Salary></Salary>
      </div>
    </div>
  )
}

export default MySalary