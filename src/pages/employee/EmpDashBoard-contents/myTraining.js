<<<<<<< HEAD
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

=======
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

>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
export default MyTraining