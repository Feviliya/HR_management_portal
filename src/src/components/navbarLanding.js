import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../assets/css-components/navbarLanding.css'
import {Button} from '@mui/material'
class NavbarLanding extends Component{
    render(){
        return (
            <div id='navbar-land'>
                <h1 className='comp-name'>HR Portal</h1>
                <div className='nav-ele'>
                    <Link className='links' to="/employee"><Button variant='contained'>Employee login</Button></Link>
                    <Link className='links' to="/admin"><Button variant='contained'>Admin Login</Button></Link>
                </div>
            </div>
          )
    }
  
}

export default NavbarLanding