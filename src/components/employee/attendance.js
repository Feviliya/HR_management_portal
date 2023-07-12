import React from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../../assets/css-components/employeecss/attendance.css'
import { Button } from '@mui/material';
const AttendanceContents = () => {
  return (
    <div className='attend-contents' style={{'display':'flex'}}>
      <div>
        <LocalizationProvider className='calendar' dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
        <Button variant='contained' className='request-leave'>Request Leave</Button>
      </div>
        <div className='tabs' >
          <div className='att-boxes'>
            <h3>No. of Days present</h3>
            <p>34 days</p>
          </div>
          <div className='att-boxes'>
            <h3>Total working hrs/day</h3>
            <p>8 hours</p>
          </div>
          <div className='att-boxes'>
            <h3>Leaves per month</h3>
            <p>1 - taken</p>
            <p>2 - left</p>
          </div>
        </div>
    </div>
  )
}

export default AttendanceContents