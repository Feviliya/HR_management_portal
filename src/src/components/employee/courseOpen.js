import React from 'react'
import Navbar from './navbar'
import SidePanelEmp from './sidepanelEmp'
import '../../assets/css-components/employeecss/courseOpen.css'
import YoutubeEmbed from './youtube'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProgressChart from './progressChart'
const CourseOpen = () => {
  return (
    <div className='course-open'>
        <Navbar></Navbar>
        <div className='content-course'>
            <SidePanelEmp></SidePanelEmp>
            <div className='course-boxes'>
                <h3>Course name: Kotlin</h3>
                <p>Learn Mobile Application Development</p>
                <div className='vid-content'>

                    <YoutubeEmbed ></YoutubeEmbed>
                    <p>Kotlin is a modern, trending programming language.
                        Kotlin is easy to learn, especially if you already know Java (it is 100% compatible with Java).Kotlin is used to develop Android apps, server side apps, and much more.Kotlin is a modern, trending programming language.
                        <br></br>
                        Kotlin is easy to learn, especially if you already know Java (it is 100% compatible with Java).Kotlin is used to develop Android apps, server side apps, and much more.</p>
                </div>

                <br></br>
                <div className='cont'>
                    <Link to='https://www.w3schools.com/KOTLIN/index.php'><Button>Referance materials</Button></Link>
                    <div className='bar'>
                        <ProgressChart></ProgressChart>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseOpen