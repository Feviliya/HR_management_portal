import React from 'react'

const ProgressChart = () => {
  return (
    <div>
      <div class="progress">
        <div style={{'width':'70%','background-color':'blue'}} class="prog" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
          <span class="sr-only" style={{'color':'white','padding-left':'20px'}}>70% Complete</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressChart