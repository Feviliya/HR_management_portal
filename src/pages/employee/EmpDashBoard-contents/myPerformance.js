import React from 'react'
import Performance from '../../../components/employee/performance'
import Navbar from '../../../components/employee/navbar'
import SidePanelEmp from '../../../components/employee/sidepanelEmp'
const MyPerformance = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div style={{'display':'flex','width':'100%'}}>
            <SidePanelEmp></SidePanelEmp>
            <Performance></Performance>
        </div>
    </div>
  )
}

export default MyPerformance