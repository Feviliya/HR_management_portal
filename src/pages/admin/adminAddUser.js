<<<<<<< HEAD
import {TextField} from '@mui/material'
import React from 'react'
import '../../assets/css-components/admincss/adminAddUser.css'
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import axios from 'axios'
import Navbar from '../../components/employee/navbar';
import AdminSidePanelEmp from '../../components/admin/adminSidePanel';
import EmpList from '../../components/admin/empList';
import AdminNavbar from '../../components/admin/adminNav';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export const AdminAddUser = () => {
    const [open, setOpen] = React.useState(false);
    const[name,setUserName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handleClick = () => {
        setOpen(true);
    };
    const handleName=(e)=>{
        setUserName(e.target.value);
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        handleClick();
        let token=localStorage.getItem('token');
        try{
            const response = await axios.post(`http://localhost:8080/api/v1/auth/register`,
            {
              name:name,
              email:email,
              password:password
            }
            );
            setUserName('');
            setEmail('');
            setPassword('');
            console.log(response.data);
          }catch(error){
            console.error("Error : ",error);
          }
        
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };
  return (
    <div id='AdminAddUser'>
        <AdminNavbar></AdminNavbar>
        <div className='admin-contents'>
            <AdminSidePanelEmp></AdminSidePanelEmp>
            <div className='user-form-details'>
                <form className='add-user-box' onSubmit={handleSubmit}>
                    <div className='left-user'>
                        <TextField className='add-user-field' onChange={handleName} label="Username" value={name} variant="outlined" required></TextField>
                        <TextField className='add-user-field' type='email' onChange={handleEmail} value={email} label="Email id" variant="outlined" required></TextField>
                    </div>
                    <div className='right-user'>
                        <TextField className='add-user-field' label="Password" onChange={handlePassword} value={password} variant="outlined" type='password' required></TextField>
                        <Button variant="outlined" type='submit'>
                            Create user
                        </Button>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            User created successfully
                            </Alert>
                        </Snackbar>
                    </div>
                </form>
                <EmpList></EmpList>
            </div>
        </div>
    </div>
  )
}
=======
import {TextField} from '@mui/material'
import React from 'react'
import '../../assets/css-components/admincss/adminAddUser.css'
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export const AdminAddUser = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
  return (
    <div id='AdminAddUser'>
        <form className='add-user-box'>
            <div className='left-user'>
                <TextField className='add-user-field' label="Username" variant="outlined" required></TextField>
                <TextField className='add-user-field' type='email' label="Email id" variant="outlined" required></TextField>
                <TextField className='add-user-field' type='number' label="Employee id" variant="outlined" required></TextField>
            </div>
            <div className='right-user'>
                <TextField className='add-user-field' label="Department" variant="outlined" required></TextField>
                <TextField className='add-user-field' label="Password" variant="outlined" type='password' required></TextField>
                <Button variant="outlined" onClick={handleClick}>
                    Create user
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    User created successfully
                    </Alert>
                </Snackbar>
            </div>
        </form>
    </div>
  )
}
>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
