import React from 'react'
import Navbar from '../../../components/employee/navbar'
import SidePanelEmp from '../../../components/employee/sidepanelEmp'
import Training from '../../../components/employee/training'
import TrainSideBar from '../../../components/employee/trainingSideBar'
const MyTraining = () => {
  return (
    <div>
      <Navbar></Navbar>
        <div style={{'display':'flex','width':'100%'}}>

            <SidePanelEmp ></SidePanelEmp>
            <Training></Training>
            <TrainSideBar></TrainSideBar>
        </div>
    </div>
  )
}

export default MyTraining