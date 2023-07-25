import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { useNavigate } from 'react-router-dom';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '../../assets/css-components/employeecss/attendance.css'
import { Button, TextField } from '@mui/material';
import Calendar from '../../components/employee/calendar'; 
import axios from 'axios';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const AttendanceContents = () => {
  const[fromDate,setFromDate]=useState('');
  const[endDate,setEndDate]=useState('');
  const [status,setStatus]=useState('Pending');
  const [reason,setReason]=useState('');


  const handleFromDate=(event)=>{
    // event.preventDefault();
    setFromDate(event.target.value);
  }
  const handleEndDate=(event)=>{
    // event.preventDefault();
    setEndDate(event.target.value);
  }
  const handleReason=(event)=>{
    setReason(event.target.value);
  }
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();
  const handleSubmit= async(event)=>{
    event.preventDefault();
    setOpen(true);
    let token=localStorage.getItem('token');
    let id=localStorage.getItem('user');
    try{
      const response = await axios.post(`http://localhost:8080/api/v1/user/post/attendance/${id}`,
      {
        id:id,
        leave_from_date:fromDate,
        leave_to_date:endDate,
        reason:reason,
        leave_req_status:status

      },
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
        }
      }
      );
      console.log(endDate)
      setEndDate('');
      setFromDate('');
      setReason('');
      setStatus('');
      console.log(response.data);
    }catch(error){
      console.error("Error : ",error);
    }
    navigate('/employee/dashboard/myattendance')
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }
    setOpen(false);
    navigate('/employee/dashboard/myattendance')
    };

  return (
    <div className='attend-contents' style={{'display':'flex'}}>
      <div>
        <Calendar className='calendar'></Calendar>
        <br></br>
        <div className='att-boxes'>
            <h3>No. of Days present</h3>
            <p>3 days</p>
          </div>
      </div>
        <div className='tabs' >
            <form onSubmit={handleSubmit}>
              <div className='dates'>
                <input placeholder='From Date' className='from-date att-box' value={fromDate} onChange={handleFromDate}></input>
                <input placeholder='To Date' className='to-date att-box' value={endDate} onChange={handleEndDate}></input>
                <div className='reason'>
                  <input placeholder='Reason' className='reason att-box' value={reason} onChange={handleReason} label='Reason' required></input>
                  <Button variant='contained' type='submit' style={{'background-color':'rgb(72, 100, 177)'}}  className='request-leave'>Request Leave</Button>
                </div>
              </div>
            </form>
            <br></br>
            <div className='att-boxes'>
              <h4>Leave Request status</h4>
              <p>{status}</p>
            </div>
            <Snackbar  open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Request Sent successfully
                    </Alert>
                </Snackbar>
        </div>
    </div>
  )
}

export default AttendanceContents