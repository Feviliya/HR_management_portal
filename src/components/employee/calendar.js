import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import axios from 'axios';
import { useState, useEffect } from 'react';

function fakeFetch(date, { signal }) {
  return new Promise(async (resolve, reject) => {
    const providedDate = dayjs(date).toDate();

    let daysToHighlight = [];

    // Add today's date to the list of days to highlight
    daysToHighlight.push(dayjs().date());

    if (userId) {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/user/getDays/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'cache-control': 'no-cache',
            },
          }
        );
        const daysFromAPI = response.data;
          console.log(daysFromAPI)
          if (Array.isArray(daysFromAPI)) {
            // Extract 'present_date' from each item in the response data
            const presentDates = daysFromAPI.map(item => dayjs(item.present_date).format('YYYY-MM-DD'));
            daysToHighlight.push(...presentDates);
          }

        resolve({ daysToHighlight });
      } catch (error) {
        console.error('Error fetching user details:', error);
        reject(error);
      }
    }
  });
}

const userId = localStorage.getItem('user');
const token = localStorage.getItem('token');

const initialValue = dayjs(new Date());

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  // Format the day in the same "YYYY-MM-DD" format as highlightedDays
  const formattedDay = day.format('YYYY-MM-DD');

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(formattedDay) >= 0;

  return (
    <Badge
      key={formattedDay} // Use formattedDay as the key
      overlap="circular"
      badgeContent={isSelected ? '✅' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

export default function DateCalendarServerRequest() {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([]);

  const addTodayToDateAPI = async () => {
    try {
      await axios.post(
        'http://localhost:8080/api/v1/user/addDay',
        { id:userId,
          present_date: new Date() }, // Send today's date in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
        }
      );
    } catch (error) {
      console.error('Error adding today\'s date to the API:', error);
    }
  };
  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        console.log(daysToHighlight)
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          throw error;
        }
      });
      
    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(initialValue);
    addTodayToDateAPI()
    // Abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <LocalizationProvider disableFuture dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
}
