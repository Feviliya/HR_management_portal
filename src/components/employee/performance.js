import React from 'react'
import ToDo from './todolist'
import '../../assets/css-components/employeecss/performance.css'
const Performance = () => {
  return (
    <div className='performance'>
        <ToDo></ToDo>
        <div className='perf-box'>
            <div className='boxes'>
                 <h3 style={{'font-weight':'bolder'}}>Projects pending</h3>
                 <p >St.Thomas Hospital Frontend Testing Report(IT)
                    <p style={{'color':'brown'}}>Deadline: 12/08/2023</p>
                 </p>
                 <p>Hotel Vista Management Frontend 
                    <p style={{'color':'brown'}}>Deadline: 26/08/2023</p>
                 </p>
            </div>
            <div className='boxes'>
                 <h3 style={{'font-weight':'bolder'}}>Projects completed</h3>
                 <p>Product development (IT)
                    <p style={{'color':'green'}}>Completed on: 26/08/2023</p>
                 </p>
            </div>
        </div>
    </div>
  )
}

export default Performance