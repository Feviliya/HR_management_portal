import React from 'react'
import ToDo from './todolist'
import '../../assets/css-components/employeecss/performance.css'
import ProgressChart from './progressChart'
import PerformanceGraph from './graph'
// import Graph from './graph'
const Performance = () => {
  return (
    <div className='performance'>
        <ToDo style={{'width':'40%'}}></ToDo>
        
        <div className='perf-box'>
            <div className='perform-boxes'>
                 <h3 style={{'font-weight':'bolder'}}>Projects pending</h3>
                 <p >St.Thomas Hospital Frontend Testing Report(IT)
                    <p style={{'color':'brown','font-size':'13px'}}>Deadline: 12/08/2023</p>
                 </p>
                 <ProgressChart className='bar'></ProgressChart>
                 <p>Hotel Vista Management Frontend 
                    <p style={{'color':'brown','font-size':'13px'}}>Deadline: 26/08/2023</p>
                 </p>
                 <ProgressChart className='bar'></ProgressChart>
            </div>
            <PerformanceGraph></PerformanceGraph>
        </div>
        
    </div>
  )
}

export default Performance