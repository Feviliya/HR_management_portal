import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import '../../assets/css-components/employeecss/attendance.css'
import { Button} from '@mui/material';
import Calendar from '../../components/employee/calendar'; 
import axios from 'axios';
<<<<<<< HEAD
import TimeSpent from '../timeSpent';
=======

>>>>>>> aca2027489c8a11dc84ff4ade36b408167209db7
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const AttendanceContents = () => {
  const [fromDate, setFromDate] = useState('');
  const [endDate, setEndDate] = useState('');
<<<<<<< HEAD
  const [status, setStatus] = useState('No leave requests');
  const [reason, setReason] = useState('');
=======
  const [status, setStatus] = useState('Pending');
  const [reason, setReason] = useState('');

>>>>>>> aca2027489c8a11dc84ff4ade36b408167209db7
  const handleFromDate = (event) => {
    setFromDate(event.target.value);
  };

  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };

  const handleReason = (event) => {
    setReason(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [attDetails, setAttDetails] = useState({});
  const navigate = useNavigate();

  let token = localStorage.getItem('token');
  let id = localStorage.getItem('user');
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/user/get/attendance/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "cache-control": 'no-cache'
          }
        });
        setAttDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (id) {
      fetchUserDetails();
    }
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setOpen(true);

    try {
      const response = await axios.put(`http://localhost:8080/api/v1/user/update/attendance`, {
        id: id,
        leave_from_date: fromDate,
        leave_to_date: endDate,
        reason: reason,
        leave_req_status: status
      }, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "cache-control": 'no-cache',
        }
      });

      setEndDate('');
      setFromDate('');
      setReason('');
      setStatus('');
      console.log(response)
    } catch (error) {
      console.error("Error : ", error);
    }
    navigate('/employee/dashboard/myattendance');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    navigate('/employee/dashboard/myattendance');
  };

<<<<<<< HEAD
  

=======
>>>>>>> aca2027489c8a11dc84ff4ade36b408167209db7
  return (
    <div className='attend-contents' style={{'display':'flex'}}>
      <div>
        <Calendar className='calendar'></Calendar>
        <br></br>
        <div className='att-boxes days-present'>
            <h3>No. of Days present</h3>
            <p>{attDetails.days_present} days</p>
          </div>
      </div>
        <div className='tabs' >
            <form onSubmit={handleSubmit}>
              <div className='dates'>
                <input placeholder='From Date' className='from-date att-box' type='date' value={fromDate} onChange={handleFromDate}></input>
                <input placeholder='To Date' className='to-date att-box' type='date' value={endDate} onChange={handleEndDate}></input>
                <div className='reason'>
<<<<<<< HEAD
                  <input placeholder='Reason(with name)' disabled={attDetails.leave_req_status === 'Pending'} className='reason att-box' value={reason} onChange={handleReason} label='Reason' required></input>
                  <br></br>
                  <Button variant='contained' type='submit' disabled={attDetails.leave_req_status === 'Pending'} style={{'background-color':'rgb(72, 100, 177)','color':'white'}}  className='request-leave' >Request Leave</Button>
=======
                  <input placeholder='Reason(with name)' className='reason att-box' value={reason} onChange={handleReason} label='Reason' required></input>
                  <br></br>
                  <Button variant='contained' type='submit' style={{'background-color':'rgb(72, 100, 177)'}}  className='request-leave'>Request Leave</Button>
>>>>>>> aca2027489c8a11dc84ff4ade36b408167209db7
                </div>
              </div>
            </form>
            <br></br>
            <div className='att-boxes'>
              <h4>Leave Request status</h4>
<<<<<<< HEAD
              <p style={{'width':'50%','background-color':'rgb(247, 235, 178)', background: attDetails.leave_req_status === 'Granted' ? 'green' : 'inherit',color: attDetails.leave_req_status === 'Granted' ? 'white' : 'inherit', }}>{attDetails.leave_req_status}</p>
            </div>
            <Snackbar  open={open} autoHideDuration={2000}  onClose={handleClose}>
=======
              <p style={{'padding':'10px','width':'20%','background-color':'rgb(247, 235, 178)', background: attDetails.leave_req_status === 'Granted' ? 'green' : 'inherit',color: attDetails.leave_req_status === 'Granted' ? 'white' : 'inherit', }}>{attDetails.leave_req_status}</p>
            </div>
            <Snackbar  open={open} autoHideDuration={2000} onClose={handleClose}>
>>>>>>> aca2027489c8a11dc84ff4ade36b408167209db7
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Request Sent successfully
                    </Alert>
                </Snackbar>
        </div>
    </div>
  )
}

export default AttendanceContents