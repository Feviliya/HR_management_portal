import React from "react";
import {TextField,Button} from "@mui/material";
import {useNavigate} from "react-router-dom"
import { useState,useEffect } from "react";
import undraw from '../../assets/undraw.svg'
import '../../assets/css-components/admincss/adminLogin.css'
import {Blocks} from 'react-loader-spinner'
const AdminMain=()=>{

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const navigate=useNavigate();
    const handleName=(event)=>{
        event.preventDefault();
        setUsername(event.target.value);
    }
    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate({username,password}));
        // setIsSubmit(true);
        if(isSubmit===true){
            navigate('/employee/dashboard');
        }
    }

    

    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.username){
        errors.username="Username is Required";
        setIsSubmit(false);
        }
        else if(values.username.length<5){
        errors.username="Username must have minimum 5 characters";
        setIsSubmit(false);
        }
        else if(reg.test(values.username)){
        errors.username="Username must contain only alphabets";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        if(!values.password){
        errors.password="Password is Required";
        setIsSubmit(false);
        }
        else if(!preg.test(values.password)){
        errors.password="Invalid password";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        return errors;
    }
    const [loading,setLoading]=useState(false);
    
    useEffect(
        ()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
        },[]
    )

    
    return(
        loading ? (
        <Blocks 
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{marginLeft:"600px",marginTop:"250px"}}
            wrapperClass="blocks-wrapper"/>)
        :
        <div id="adminMain">
            <form className="admin-box" onSubmit={handleSubmit}>
                <div className="log-box">
                <p className="admin-ask">Admin Sign In</p>
                <TextField onChange={handleName} value={username} className="admin-inp" type="text" label="Username" required></TextField>
                <p  style={{color:"brown",fontSize:"13px",marginLeft:"-5%"}}>{formErrors.username}</p>
                <br></br>
                <TextField onChange={handlePwd} value={password} className="admin-inp" type="password" label="Password" required></TextField>
                <p  style={{color:"brown",fontSize:"13px",marginLeft:"-43%"}}>{formErrors.password}</p>
                {/* <br></br> */}
                <input type="checkbox" id="admin-myCheckbox" name="myCheckbox" />
                <label for="myCheckbox">&nbsp;&nbsp;Keep me signed in</label>
                <br></br>
                <Button type="submit"  id="admin-login-button" variant="contained" >
                    Log In 
                </Button>

                </div>
                
            </form>
            <div className="admin-image">

                <img className="undraw" src={undraw} alt="Company-img"></img>
            </div>

        </div>
    )
        
}
export default AdminMain;