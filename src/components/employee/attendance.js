import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { useNavigate } from 'react-router-dom';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../../assets/css-components/employeecss/attendance.css'
import { Button, TextField } from '@mui/material';
import Calendar from '../../components/employee/calendar'; 

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const AttendanceContents = () => {
  const[fromDate,setFromDate]=useState('');
  const[endDate,setEndDate]=useState('');
  const [status,setStatus]=useState('Empty')
  localStorage.setItem('status', status);
  const handleFromDate=(event)=>{
    // event.preventDefault();
    setFromDate(event.target.value);
  }
  const handleEndDate=(event)=>{
    // event.preventDefault();
    setFromDate(event.target.value);
  }
  const [open, setOpen] = React.useState(false);
  const handleSubmit=(event)=>{
    event.preventDefault();
    setOpen(true);
    if(fromDate && endDate ){

      setStatus('Pending');
    }
    navigate('/employee/dashboard/myattendance')
  }
  const navigate=useNavigate();
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
        {/* <LocalizationProvider className='calendar' dateAdapter={AdapterDayjs}>
          <DateCalendar/>
        </LocalizationProvider> */}
        <Calendar className='calendar'></Calendar>
        <br></br>
        <div className='att-boxes'>
            <h3>No. of Days present</h3>
            <p>34 days</p>
          </div>
      </div>
        <div className='tabs' >
            <form onSubmit={handleSubmit}>
              <div className='dates'>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateField']} onChange={handleFromDate}  value={fromDate}>
                    <DateField label="From" required/>
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateField']}  onChange={handleFromDate} value={endDate} required>
                    <DateField label="To" required/>
                  </DemoContainer>
                </LocalizationProvider>
                <div className='reason'>
                  <TextField  label='Reason' required></TextField>
                  <Button variant='contained' type='submit' style={{'background-color':'rgb(72, 100, 177)'}}  className='request-leave'>Request Leave</Button>
                </div>
              </div>
            </form>
            <br></br>
            <div className='att-boxes'>
              <h4>Leave Request status</h4>
              <p>{localStorage.getItem('status')}</p>
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