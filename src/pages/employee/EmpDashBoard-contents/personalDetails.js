<<<<<<< HEAD
import React from 'react'
import Navbar from '../../../components/employee/navbar'
import SidePanelEmp from '../../../components/employee/sidepanelEmp'
import UpdateProfile from '../../../components/employee/updateProfile'

const PersonalDetails = () => {
  return (
    <div id='emp-personal'>
        <Navbar></Navbar>
        <div className='update-profile' style={{'display':'flex'}}>
          <SidePanelEmp></SidePanelEmp>
          <UpdateProfile></UpdateProfile>
        </div>
    </div>
  )
}

=======
import React from 'react'
import Navbar from '../../../components/employee/navbar'
import SidePanelEmp from '../../../components/employee/sidepanelEmp'
import UpdateProfile from '../../../components/employee/updateProfile'

const PersonalDetails = () => {
  return (
    <div id='emp-personal'>
        <Navbar></Navbar>
        <div className='update-profile' style={{'display':'flex'}}>

          <SidePanelEmp></SidePanelEmp>
          <UpdateProfile></UpdateProfile>
        </div>
    </div>
  )
}

>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
export default PersonalDetails