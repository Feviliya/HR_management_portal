import React,{useState,useEffect} from 'react'
import '../../assets/css-components/employeecss/sidebarTrain.css'
import DonutPerform from '../../components/employee/donutperform'
import axios from 'axios'
const TrainSideBar = () => {
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
    <div className='sidebar-train'>
        
        <div className='course-completed'>
          <h6>Courses completed</h6>
          <p>{userCourse.courses_completed}</p>
        </div>
        <div className='course-completed'> 
          <h6>Badges Recieved</h6>
          <p>1</p>
        </div>
        <DonutPerform compVale={userCourse.completion_status}></DonutPerform>
    </div>
  )
}

export default TrainSideBar