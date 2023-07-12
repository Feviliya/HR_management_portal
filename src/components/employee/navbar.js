import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import logoutbtn from '../../assets/shutdown.png'
import '../../assets/css-components/employeecss/empNavBar.css'
import TimeSpent from '../timeSpent'
const Navbar = () => {
  return (
    <div className='nav-emp'>
      
        <h1 className='comp-name-emp'>HR Portal</h1>
        <div className='nav-ele-emp'>
            <Link className='links connect' to="/connect"><Button variant='contained'>Connect</Button></Link>
            <Link className='links logout' to="/"><img width='40px' alt='logout' src={logoutbtn}></img></Link>
        </div>
    </div>
  )
}

export default Navbar