import React, { useState } from 'react'
import {TextField } from '@mui/material'

import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import '../../assets/css-components/employeecss/detailsEdit.css'
import { useNavigate } from 'react-router-dom';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UpdateProfile = () => {
    const [email,setEmail]=useState('');
    const[age,setAge]=useState(0);
    const [dob,setDob]=useState('');
    const[pwd,setPwd]=useState('');

    let uname=localStorage.getItem('Name')
    const [open, setOpen] = React.useState(false);
    const navigate=useNavigate();
    const handleClick = (e) => {
      e.preventDefault();
      setOpen(true);
    };
    const handleMail=(event)=>{
      event.preventDefault();
      setEmail(event.target.value);
    }
    const handleAge=(event)=>{
      event.preventDefault();
      setAge(event.target.value);
    }
    const handleDob=(event)=>{
      event.preventDefault();
      setDob(event.target.value);
    }
    const handlePwd=(event)=>{
      event.preventDefault();
      setPwd(event.target.value);
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
        navigate('/employee/dashboard')
    };
  return (

    
    <div className='update-profile'>
        <form onSubmit={handleClick} className='add-user-box'>
            <div className='left-user'>
                <TextField InputLabelProps={{
            shrink: true,
          }}  className='add-user-field' label="Username" variant="outlined" disabled value={uname}></TextField>
                <TextField onChange={handleMail} className='add-user-field' type='email' label="Email id" variant="outlined" required></TextField>
                <TextField InputLabelProps={{
            shrink: true,
          }} className='add-user-field' onChange={handleDob} type='date' label="Date of birth" variant="outlined" required></TextField>
            </div>
            <div className='right-user'>
                <TextField onChange={handleAge} className='add-user-field' label="Age" variant="outlined" required></TextField>
                <TextField onChange={handlePwd} className='add-user-field' label="Password" variant="outlined" type='password' required></TextField>
                <Button type='submit' variant="contained">
                    Update Profile
                </Button>
                <Snackbar  open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Profile updated successfully
                    </Alert>
                </Snackbar>
            </div>
        </form>
    </div>
  )
}

export default UpdateProfile