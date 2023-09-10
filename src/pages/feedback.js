import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import '../assets/css-components/feedback.css'

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
const Feedback = () => {
    const navigate=useNavigate();
    const [open, setOpen] = React.useState(false);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [feedback,setFeed]=useState();
    // const token=localStorage.getItem('token')
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post(`http://localhost:8080/api/v1/auth/addUserFeedback`,
            {
              name:name,
              email:email,
              feedback:feedback
    
            },
            // {
            //   headers:
            //   {
            //     'Authorization':`Bearer ${token}`,
            //     'cache-control':'no-cache',
            //   }
            // }
            )
            console.log(response)
          }catch(error){
            navigate('/')
            console.log("Good to go");
          }
          setOpen(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
        navigate('/')
    };
  return (
    <div className='feedback-page'>
        <h3>Feedback form</h3>
        <form onSubmit={handleSubmit} className='main-feedback-form'>
            <TextField required sx={{ color: 'red'  }} variant="outlined" onChange={(e)=>{setName(e.target.value)}} label="Name" placeholder='Enter Name' value={name}></TextField>
            <TextField required variant="outlined" onChange={(e)=>{setEmail(e.target.value)}} label="Email" placeholder='Enter email' value={email}></TextField>
            <TextField required variant="outlined" onChange={(e)=>{setFeed(e.target.value)}} label="Feedback" placeholder='Provide Feedback' value={feedback}></TextField>
            <Button variant='contained' type='submit'>Submit</Button>
            <Snackbar  open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Feedback submitted successfully
                    </Alert>
                </Snackbar>
        </form>

    </div>
  )
}

export default Feedback