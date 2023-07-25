import React, { useState,useEffect } from 'react'
import '../../assets/css-components/employeecss/myTraining.css'

import TrainSideBar from '../../components/employee/trainingSideBar'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Training = () => {
    const [userCourse,setCourse]=useState({});
    const userId = localStorage.getItem('user');
  const token=localStorage.getItem('token');
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/user/get/course/${userId}`,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache'
          }
        }
        );
        setCourse(response.data);
        console.log(userCourse);
      } catch (error) {
        console.log(userCourse)
        console.error('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, []);
  return (
    <div className='my-training'>
        <h3>New courses</h3><br></br>
        <div className='train-boxes'>
            <h4>{userCourse.current_course}</h4> 
            <p>{userCourse.current_course_desc}</p>
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