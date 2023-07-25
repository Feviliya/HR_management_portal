import React from 'react'
import '../assets/css-components/marquee.css'
function Marquee() {
  return (
    <div className='marq'>
    <h4>News feed</h4>
    <div class="container">
    <ul class="slider">
        <li>
          <h5>Telecom and allied sectors set to witness strong hiring growth📈</h5>
          <p>Highlighted how their AI practices have evolved and what are some major trends in the Telecom industry.</p>
        </li>
        <li>
            <h5>Celebrating the 10th anniversary of the company😍</h5>
            <p>Appreciating the valuable work of the employees to the improvement of the company</p>
        </li>
        <li>
            <h5>New training courses📚 are enabled for newbees!</h5>
            <p>Check out the courses in the --course section-- of your dashboard and gain access to the learning materials soon</p>
        </li>
    </ul>
</div>
    </div>
  )
}

export default Marquee