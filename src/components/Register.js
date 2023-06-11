import React, { useState } from 'react';
import { Grid, Paper, TextField } from '@mui/material';
import TravelImage from '/Users/naveen/DAL/MAY_2023/5709/Github/tutorial3/src/plane.jpg';
import './Register.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

const Register = (props) => {

    const [firstnameErrorMessage, setFirstnameErrorMessage] = useState("");
    const [lastnameErrorMessage, setLastnameErorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("") ;
    const [submitErrorMessage, setSubmitErrorMessage] = useState("");

    const [user, setUser] = useState({ firstname: null, lastname: null, email: null, password: null })


    const handleFirstName = (e) => {
        const usernameRegex = /^[a-zA-Z]+$/;
        if(!usernameRegex.test(e.target.value) && e.target.value) {
            setFirstnameErrorMessage("Invalid First Name!... Only aplhabets allowed!!..")
        }
        else{
            setFirstnameErrorMessage("");
            props.setFirstname(e.target.value)
            setUser((prevUser) => ({ ...prevUser, firstname: e.target.value}))
        }
    }

    const handleLastName = (e) => {
        const usernameRegex = /^[a-zA-Z]+$/;
        if(!usernameRegex.test(e.target.value) && e.target.value) {
            setLastnameErorMessage("Invalid Last Name!... Only aplhabets allowed!!..")
        }
        else{
            setLastnameErorMessage("");
            props.setLastname(e.target.value)
            setUser((prevUser) => ({ ...prevUser, lastname: e.target.value}))
        }
    }

    const handelEmail = (e) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  //eslint-disable-line
        if(!emailRegex.test(e.target.value) && e.target.value) {
            setEmailErrorMessage("Invalid Email Id!...")
        }
        else{
            setEmailErrorMessage("");
            props.setEmail(e.target.value)
            setUser((prevUser) => ({ ...prevUser, email: e.target.value}))
        }
    }

    const handelPassword = (e) => {
        const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,16}$/;
        if(!passwordRegex.test(e.target.value) && e.target.value) {
            setPasswordErrorMessage("Password should have atleast one special character and minimum 8 characters & maximum 16 characters ")
        }
        else{
            setPasswordErrorMessage("");
            setConfirmPassword(e.target.value);
        }
    }

    const handleMatchPassword = (e) => {
        console.log(props);
        if( confirmPassword !== e.target.value) {
            setPasswordMatchError("Passwords doesn't match...")
        }
        else{
            setPasswordMatchError("");
            props.setPassword(e.target.value) 
            setUser((prevUser) => ({ ...prevUser, password: e.target.value}))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstnameErrorMessage ||
            lastnameErrorMessage ||
            emailErrorMessage ||
            passwordErrorMessage || 
            passwordMatchError ||
            Object.values(user).some((value) => value === null || value === "")
            ){
                setSubmitErrorMessage("Please fill all fields")
                
            }
        else{
            console.log("submit");
            console.log(user);
            props.setLoggedIn(true);
        }
    }


    return (
        <Grid container spacing={0.0}>
            <Grid item xs={6}>
                <Paper style={{ height: '100vh' }}>
                    <img className='image'
                        src={TravelImage}
                        alt='Travel' />
                </Paper>
            </Grid>
            <Grid item xs={6} className='form-container'>
                <Paper elevation={1} className='form'>
                    <form noValidate>
                        <h2 style={{textAlign: 'center'}}>Register</h2>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            placeholder='First Name'
                            fullWidth
                            margin="normal"
                            onChange={handleFirstName}
                            autoComplete='off'
                        />
                        {firstnameErrorMessage.length > 0 ? (
                            <Alert severity="error">{firstnameErrorMessage}</Alert>
                        ) : null }
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            placeholder='Last Name'
                            fullWidth
                            margin="normal"
                            autoComplete='off'
                            onChange={handleLastName}
                        />
                        {lastnameErrorMessage.length > 0 ? (
                            <Alert severity="error">{lastnameErrorMessage}</Alert>
                        ) : null }
                        <TextField
                            label="Email"
                            variant="outlined"
                            placeholder='Email'
                            fullWidth
                            margin="normal"
                            autoComplete='off'
                            onChange={handelEmail}
                        />
                        {emailErrorMessage.length > 0 ? (
                            <Alert severity="error">{emailErrorMessage}</Alert>
                        ) : null }
                        <TextField
                            label="Password"
                            variant="outlined"
                            placeholder='Password'
                            fullWidth
                            margin="normal"
                            type="password"
                            autoComplete='off'
                            onChange={handelPassword}
                            />
                            {passwordErrorMessage.length > 0 ? (
                                <Alert severity="error">{passwordErrorMessage}</Alert>
                            ) : null }
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            placeholder='Confirm Password'
                            fullWidth
                            margin="normal"
                            type="password"
                            autoComplete='off'
                            onChange={handleMatchPassword}
                            />
                            {passwordMatchError.length > 0 ? (
                                <Alert severity="error">{passwordMatchError}</Alert>
                            ) : null }
                            {submitErrorMessage.length > 0 ? (
                                <Alert severity="error">{submitErrorMessage}</Alert>
                            ) : null }
                        <Button type='submit' variant="contained" endIcon={<SendIcon />} onClick={handleSubmit} >
                            Register
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Register;
