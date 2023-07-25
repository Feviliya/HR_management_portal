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

export default PersonalDetails