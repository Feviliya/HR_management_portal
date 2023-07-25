<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import logoutbtn from '../../assets/shutdown.png'
import '../../assets/css-components/employeecss/empNavBar.css'
import TimeSpent from '../timeSpent'

import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from '../../redux/employee/userSlice';
const Navbar = () => {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  const handleLogout=(e)=>{
    localStorage.setItem('token','null');
  }
  return (
    <div className='nav-emp'>
      
        <h1 className='comp-name-emp'>HR Portal</h1>
        <div className='nav-ele-emp'>
            <Link className='links connect' to="/employee/dashboard/connect"><Button variant='contained'>Connect</Button></Link>
            <Link className='links logout' to="/" ><Button onClick={handleLogout}>Log out</Button></Link>
        </div>
    </div>
  )
}

=======
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import logoutbtn from '../../assets/shutdown.png'
import '../../assets/css-components/employeecss/empNavBar.css'
import TimeSpent from '../timeSpent'

import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from '../../redux/employee/userSlice';
const Navbar = () => {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  
  return (
    <div className='nav-emp'>
      
        <h1 className='comp-name-emp'>HR Portal</h1>
        <div className='nav-ele-emp'>
            <Link className='links connect' to="/employee/dashboard/connect"><Button variant='contained'>Connect</Button></Link>
            <Link className='links logout' to="/" ><Button >Log out</Button></Link>
        </div>
    </div>
  )
}

>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
export default Navbar