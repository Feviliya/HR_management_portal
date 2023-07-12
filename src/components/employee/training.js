import React from 'react'
import '../../assets/css-components/employeecss/myTraining.css'
import { Button } from '@mui/material'
const Training = () => {
  return (
    <div className='my-training'>
        <h3>New courses</h3><br></br>
        <div className='train-boxes'>
            <h4>Kotlin with Celi</h4> 
            <p>Learn Mobile Application Development</p>
            <div className='course-date'>
                <div className='start-date'>
                    <p>Start Date<p>13/06/2023</p></p>
                    
                </div>
                <div className='end-date'>
                    <p>End Date<p>28/06/2023</p></p>
                    
                </div>
            </div>
            <Button variant='contained' className='enroll'>Enroll</Button>
        </div>
    </div>
  )
}

export default Training