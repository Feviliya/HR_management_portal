import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import '../../assets/css-components/admincss/adminNav.css'
// import logoutbtn from '../../assets/shutdown.png'
// import TimeSpent from '../timeSpent'

// import { useDispatch, useSelector } from "react-redux";
// import { logout, selectUser } from '../../redux/employee/userSlice';
const AdminNavbar = () => {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  
  return (
    <div className='admin-nav-emp'>
      
        <h1 className='comp-name-emp'>HR Portal</h1>
        <div className='admin-nav-ele-emp'>
            <Link className='links connect' to="/employee/dashboard/connect"><Button variant='contained'>Connect</Button></Link>
            <Link className='links logout' to="/" ><Button >Log out</Button></Link>
        </div>
    </div>
  )
}
 
export default AdminNavbar