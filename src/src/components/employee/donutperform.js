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

export default DonutPerform