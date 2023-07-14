import React from 'react'
import '../../assets/css-components/employeecss/sidebarTrain.css'
import DonutPerform from '../../components/employee/donutperform'
const TrainSideBar = () => {
  return (
    <div className='sidebar-train'>
        <div className='course-completed'>
          <h6>Courses enrolled</h6>
          <p>4</p>
        </div>
        <div className='course-completed'>
          <h6>Courses completed</h6>
          <p>2</p>
        </div>
        <div className='course-completed'>
          <h6>Badges Recieved</h6>
          <p>1</p>
        </div>
        <DonutPerform></DonutPerform>
    </div>
  )
}

export default TrainSideBar