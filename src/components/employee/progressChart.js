import React from 'react'

const ProgressChart = () => {
  return (
    <div>
      <div class="progress">
        <div style={{'width':'70%'}} class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
          <span class="sr-only">70% Complete</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressChart