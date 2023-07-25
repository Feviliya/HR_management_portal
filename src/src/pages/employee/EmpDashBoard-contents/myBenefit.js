import React from 'react'
import Benefits from '../../../components/employee/benefits'
import Navbar from '../../../components/employee/navbar'
import SidePanelEmp from '../../../components/employee/sidepanelEmp'

const MyBenefits = () => {
  return (
    <div className='benefits'>
        <Navbar></Navbar>
        <div style={{'display':'flex'}}>

        <SidePanelEmp></SidePanelEmp>
        <Benefits></Benefits>
        </div>
    </div>
  )
}

export default MyBenefits