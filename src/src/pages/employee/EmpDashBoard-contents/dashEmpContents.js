import React,{useState,useEffect} from 'react'
import userImage from '../../../assets/user.png'
import { Link } from 'react-router-dom'
import '../../../assets/css-components/employeecss/dashEmpContents.css'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/employee/userSlice'
import axios from 'axios'
const DashEmpContents = () => {
  const [userDetails, setUserDetails] = useState({});
  const userId = localStorage.getItem('user');
  const token=localStorage.getItem('token');

  const userData=useSelector((state)=>state.user.user);
  const dispatch=useDispatch();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/user/get/userDetails/${userId}`,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache'
          }
        }
        );

        setUserDetails(response.data);
        dispatch(login(response.data));
        console.log(userDetails)
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId,token,dispatch]);

  return (
    <div className='dash-emp-contents'>
        <div className='user-details boxes'>

            <div className='pic-name'>
            <img alt='userpic' width="100px" src={userImage}></img>
            <h3>{userDetails.name}</h3>
            </div>
          <br></br>
          <br></br>
          <p>EMP ID : {userId} </p>
          <p>Department :{userDetails.department}</p>
          <p>Email : {userDetails.email}</p>
          <p>Phone :{userDetails.phone}</p>
          <p>Date of Join :{userDetails.date_of_join}</p>
          <p>Address : {userDetails.address}</p>
          <Link to='/employee/dashboard/updateProfile'><Button variant='contained'>Update Profile</Button></Link>
        </div>
        <div className='right-contents'>
        <div className='handbook boxes'>
            <svg id="Layer_1" height="50" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                <path d="m22.922 1.7a3.017 3.017 0 0 0 -2.516-.636l-4.122 1a4 4 0 0 0 -3.284 3.936v14.8l-1 .181-1-.181v-14.8a3.979 3.979 0 0 0 -3.227-3.923l-4.237-1.028a3 3 0 0 0 -3.536 2.951v16.834l12 2.183 12-2.183v-16.834a2.992 2.992 0 0 0 -1.078-2.3z"/>
            </svg>
            <Link to="/handbook" className='hand-book' >Employee handbook</Link>
            <p>Need authoritative guidance or the official HR Regulations?</p>
        </div>
        <div className='ref boxes'>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="52">
                <path d="m23.927,20.125l-3.971-17.729c-.359-1.615-1.969-2.634-3.581-2.275l-.976.218c-.466.104-.882.312-1.23.594-.547-.573-1.317-.931-2.17-.931h-6c-1.654,0-3,1.346-3,3v2c0,.552.447,1,1,1s1-.448,1-1v-2c0-.551.448-1,1-1h2v6c0,.552.447,1,1,1s1-.448,1-1v-1h3v10h-3v-1c0-.552-.447-1-1-1s-1,.448-1,1v6h-2c-.552,0-1-.449-1-1v-2c0-.552-.447-1-1-1s-1,.448-1,1v2c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3v-8.706l2.097,9.364c.313,1.393,1.556,2.343,2.928,2.343.215,0,.434-.023.652-.072l.976-.218c.783-.175,1.451-.644,1.881-1.321.43-.678.569-1.482.394-2.265Zm-7.974-12.727l2.928-.655,2.267,10.122-2.929.654-2.267-10.121Zm-.118-5.108s1.122-.242,1.195-.242c.188,0,.372.053.534.156.226.144.382.366.44.627l.439,1.96-2.928.655-.439-1.962c-.119-.539.221-1.074.759-1.194Zm-5.835,2.71v-3h2c.552,0,1,.449,1,1v2h-3Zm2,17h-2v-3h3v2c0,.551-.448,1-1,1Zm9.844-.683c-.143.226-.365.382-.627.44l-.976.218c-.537.117-1.072-.219-1.193-.756l-.392-1.749,2.929-.653.391,1.745c.059.261.012.53-.132.755ZM3,13H1c-.553,0-1-.448-1-1s.447-1,1-1h2v-2c0-.552.447-1,1-1s1,.448,1,1v2h2c.553,0,1,.448,1,1s-.447,1-1,1h-2v2c0,.552-.447,1-1,1s-1-.448-1-1v-2Z"/></svg>
            <Link to='/ref-materials' className='ref-mat'>Referance materials</Link>
            <p>Locate forms, quick guides, toolkits, manuals and more</p>
        </div>
        <div className='ref boxes sal'>
            <Link to='/employee/dashboard/mySalary'>
                <Button variant='contained'>Check Salary</Button>
            </Link>
        </div>
        </div>
        
      </div>
  )
}

export default DashEmpContents