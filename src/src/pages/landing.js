import React,{useState,useEffect} from 'react'
import NavbarLanding from '../components/navbarLanding'
import About from '../components/about'
import '../assets/css-components/landingMain.css'
import {Blocks} from "react-loader-spinner"
import Footer from '../components/footer'

const Landing=()=> {
  const [loading,setLoading]=useState(false);
    
    useEffect(
        ()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },500)
        },[]
    )

  return (
    loading ? (
      <Blocks 
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{marginLeft:"600px",marginTop:"250px"}}
          wrapperClass="blocks-wrapper"/>)
      :
    <div className='landing-main'>
        <NavbarLanding></NavbarLanding>
        <About></About>
        <Footer></Footer>
      </div>
  )
}

export default Landing