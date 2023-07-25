import React,{useState,useEffect} from 'react'
import ToDo from './todolist'
import '../../assets/css-components/employeecss/performance.css'
import ProgressChart from './progressChart'
import PerformanceGraph from './graph'
import axios from 'axios'
// import Graph from './graph'
const Performance = () => {
  const [userProjects,setProjects]=useState({});
  const userId = localStorage.getItem('user');
  const token=localStorage.getItem('token');
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/user/get/project/${userId}`,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache'
          }
        }
        );
        setProjects(response.data);
        console.log(userProjects)
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, []);

  return (
    <div className='performance'>
        <ToDo style={{'width':'60%'}}></ToDo>
        
        <div className='perf-box'>
            <div className='perform-boxes'>
                 <h3 style={{'font-weight':'bolder'}}>Projects pending</h3>
                 <p >{userProjects.current_project}(IT)
                    <p style={{'color':'brown','font-size':'13px'}}>Deadline: {userProjects.deadline}</p>
                    <p>Project Lead: {userProjects.project_lead}</p>
                 </p>
                 <div>
                  <div class="progress">
                    <div style={{'width':'60%','background-color':'blue'}} class="prog" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      <span class="sr-only" style={{'color':'white','padding-left':'20px'}}>{userProjects.project_completion_percentage} %</span>
                    </div>
                  </div>
                </div>
            </div>
            <h4>Performance</h4>
            <PerformanceGraph></PerformanceGraph>
        </div>
        
    </div>
  )
}

export default Performance