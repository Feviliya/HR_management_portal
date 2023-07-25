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
