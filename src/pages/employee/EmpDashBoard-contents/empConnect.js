<<<<<<< HEAD
import React from 'react'
import Connect from '../../../components/employee/connect'
import Navbar from '../../../components/employee/navbar'
import '../../../assets/css-components/employeecss/connect.css'
import SidePanelEmp from '../../../components/employee/sidepanelEmp'
const EmpConnect = () => {
  return (
    <div >
        <Navbar></Navbar>
        <div style={{'display':'flex','width':'95%'}}>
        <SidePanelEmp></SidePanelEmp>
        <div className='connect-contents'>

        <Connect></Connect> 
        </div>
        </div>
    </div>
  )
}

=======
import React from 'react'
import Connect from '../../../components/employee/connect'
import Navbar from '../../../components/employee/navbar'
import '../../../assets/css-components/employeecss/connect.css'
import SidePanelEmp from '../../../components/employee/sidepanelEmp'
const EmpConnect = () => {
  return (
    <div >
        <Navbar></Navbar>
        <div style={{'display':'flex','width':'95%'}}>
        <SidePanelEmp></SidePanelEmp>
        <div className='connect-contents'>

        <Connect></Connect> 
        </div>
        </div>
    </div>
  )
}

>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
export default EmpConnect