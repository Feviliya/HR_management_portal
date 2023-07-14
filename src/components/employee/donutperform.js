import React from 'react'
import '../../assets/css-components/employeecss/donutPerform.css'
const DonutPerform = () => {
  return (
    <div className='donut-training'>
      <div class="progress-bar">
  <progress value="75" min="0" max="100" style={{"visibility":"hidden","height":"0","width":"0"}}>75%</progress>
</div>

    </div>
  )
}

export default DonutPerform