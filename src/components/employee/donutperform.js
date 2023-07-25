<<<<<<< HEAD
import React from 'react'
import '../../assets/css-components/employeecss/donutPerform.css'
const DonutPerform = ({compValue}) => {
  return (
    <div className='donut-training'>
      <div class="progress-bar">
  <progress value={compValue} min="0" max="100" style={{"visibility":"hidden","height":"0","width":"0"}}>{compValue}%</progress>
</div>

    </div>
  )
}

=======
import React from 'react'
import '../../assets/css-components/employeecss/donutPerform.css'
const DonutPerform = ({compValue}) => {
  return (
    <div className='donut-training'>
      <div class="progress-bar">
  <progress value={compValue} min="0" max="100" style={{"visibility":"hidden","height":"0","width":"0"}}>{compValue}%</progress>
</div>

    </div>
  )
}

>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
export default DonutPerform