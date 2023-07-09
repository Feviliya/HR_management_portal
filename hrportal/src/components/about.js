import React from 'react'
import '../css-components/about.css'
import Marquee from './marquee'
function About() {
  return (
    <div id='about-land'>
        <div className='about-desc'>
            <h3>Human resources isn't a thing we do. It's the thing that runs our business.</h3>
            <br></br>
            <p>Human Resources can, instead, assume a new innovative aspect. With the help of an HR platform, they will be able to improve the employee's experience in the company, transforming some fundamental elements in new, more effective, and faster processes.
            </p>
            <br></br>
            <p>Let's get started!</p>
            <img alt='end' width='200px' src='https://cdn.pixabay.com/photo/2020/05/30/20/53/divider-5240422_1280.png'></img>
        </div>
        <div className='news-feed'>
            <Marquee></Marquee>
            <br></br>
            <img alt='comp' src='https://cdn.vietnambiz.vn/2020/1/14/company-partner-15789708002112118848659.png' width='340px'></img>
        </div>
    </div>   
  )
}

export default About