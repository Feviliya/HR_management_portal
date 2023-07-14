import React from 'react'
import '../../assets/css-components/employeecss/myTraining.css'

import TrainSideBar from '../../components/employee/trainingSideBar'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Training = () => {
  return (
    <div className='my-training'>
        <h3>New courses</h3><br></br>
        <div className='train-boxes'>
            <h4>Kotlin</h4> 
            <p>Learn Mobile Application Development</p>
            <div className='course-date'>
                <div className='start-date'>
                    <p>Start Date<p>13/06/2023</p></p>
                    
                </div>
                <div className='end-date'>
                    <p>End Date<p>28/06/2023</p></p>
                    
                </div>
            </div>
            <Link to='/employee/dashboard/myTraining/course'>
            <Button variant='contained' style={{'background-color': 'rgb(72, 100, 177)'}} className='enroll'>Open</Button>
            </Link>

        </div>
            
    </div>
  )
}

export default Training