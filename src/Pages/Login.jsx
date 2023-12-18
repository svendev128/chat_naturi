import React, { useEffect, useState } from 'react';

import { Box, Typography, Button, Divider, TextField, Link, Snackbar } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import {  useGoogleLogin } from '@react-oauth/google';

import { login, register, googleLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = (props) => {
    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogin = () => {                     
        if(!isLogin) {
            if(!email) alert("Please enter the your Email");
            else if(!name) alert("Please enter your name");
            else if(!password) alert("Please enter the password at least 6 character");
            else if(!confirmPassword) alert("Please confirm your password");
            else if(confirmPassword === password) {
                // props.register(email, name, password);
                navigate('/userdashboard', {replace:true});
            } else {
                alert("Correct confirm your password");
                setConfirmPassword("");
            }
        } else {
            if(!email) alert("Please enter the your Email");
            else if(!password) alert("Please enter your password");
            // else props.login(email, password);
            else navigate('/userdashboard', {replace:true});
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    // useEffect(() => {
    //     if(props.error.length !== 0) {
    //         setOpen(true);
    //     }
    // },[props.error])

    // useEffect(() => {
    //     if(props.isAuthenticated === true) {
    //         if(props.role) {
    //             navigate('/editchatbot', {replace: true});
    //         } else {
    //            navigate('/main', {replace: true});
    //         }
    //     }
    // })

    // const responseMessage = (response) => {
    //     const token = response.access_token;  
    //     fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`)
    //         .then(response => response.json())
    //         .then(userProfile => {
    //             const email = userProfile.email;
    //             const name = userProfile.name;
    //             const password = "password";
    //             props.googleLogin(email, name, password);
    //             console.log("google login data = ", userProfile);
    //         })
    //         .catch(error => {
    //             console.log("Error MEssage = ", error)
    //         })
    //   }

    // const errorMessage = (error) => {
    //     console.log(error);
    // }

    const navigate = useNavigate();

    // const login = useGoogleLogin({
    //     onSuccess: (response) => responseMessage(response),
    //     onError: (error) => errorMessage(error)
    // })

    return (
        <Box sx={{width: '100%', height:'100%'}}>
            <Box sx={{width:'30%',top:'20%', left:'35%', position:'absolute'}}>
                <Typography variant='h3'>LOGO</Typography>
                <Box sx={{display: 'flex', margin:'10px 0'}}>
                    <Button 
                        sx={{
                            width:'50%', 
                            border: isLogin ? '1px solid #51BBD5' : '1px solid #ADADAD'  ,
                            background: isLogin ? '#E6FAFF' : '', 
                            borderRadius: isLogin ? '5px 0px 0px 5px' : '',
                            color: isLogin ? '#51BBD5' : '#ADADAD'
                        }}
                        onClick={() => {setIsLogin(true);}}
                    >
                        Login
                    </Button>
                    <Button 
                        sx={{
                            width:'50%', 
                            border: isLogin ? '1px solid #ADADAD' : '1px solid #51BBD5',
                            background: isLogin ? '' : '#E6FAFF', 
                            borderRadius: isLogin ? '' : '5px 0px 0px 5px',
                            color: isLogin ? '#ADADAD' : '#51BBD5'
                        }}
                        onClick={() => {setIsLogin(false);}}
                    >
                        CREATE ACCOUNT
                    </Button>
                    
                </Box>
                {/* <Button sx={{width:'100%', borderRadius:'5px', border:'1px solid #51BBD5', display:'flex', color: '#51BBD5'}} onClick={login}>
                    <GoogleIcon sx={{color:'#51BBD5'}} />
                    {
                        isLogin ? "LOGIN " : "SIGN UP "
                    }
                    WITH GOOGLE
                </Button> */}
                <Divider sx={{color:'#212121'}}>or</Divider>
                <TextField
                    label="Email"
                    placeholder='Enter your Email'
                    id="outlined-start-adornment"
                    sx={{ 
                        margin: '10px 0', 
                        width: '100%', 
                        borderRadius: '4px',
                     }}
                    value={email}
                    focused
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                {
                    isLogin ? "" : (
                        <TextField
                            label="Name"
                            placeholder='Enter your Name'
                            sx={{ 
                                margin: '10px 0', 
                                width: '100%', 
                                borderRadius: '4px',
                            }}
                            value={name}
                            focused
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    )
                }
                <TextField
                    label="Password"
                    placeholder='Password'
                    id="outlined-start-adornment"
                    sx={{ margin: '10px 0', width: '100%' }}
                    value={password}
                    type='password'
                    focused
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    isLogin ? '' : (
                        <TextField
                            label="Confirm Passwor"
                            placeholder='Confirm Password'
                            id="outlined-start-adornment"
                            sx={{ margin: '10px 0', width: '100%' }}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type='password'
                            focused
                            required
                        />
                    )
                }
                <Button
                    variant="outlined"
                    sx={{ 
                    width:'100%',
                    height: '56px',
                    borderRadius:'8px',
                    background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                    fontWeight:'700', 
                    fontSize:'20px',
                    color: '#FDFDFD'
                    }}
                    onClick={handleLogin}
                >
                    {
                        isLogin ? "LOGIN" : "SIGN UP"
                    }
                </Button>
                {/* {
                    isLogin ? (
                        <Link href="#" underline="none" color='#51BBD5'>
                            FORGOT YOUR PASSWORD?   
                        </Link>
                    ) : ""
                } */}
                
            </Box>
            {/* {
                isLogin ? 
                    <Snackbar
                        anchorOrigin={{ horizontal: 'right', vertical: 'top'}}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                    >
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            {props.error.length !== 0  && props.error[props.error.length - 1].msg}
                        </Alert>
                    </Snackbar>
                 : 
                    <Snackbar
                        anchorOrigin={{ horizontal: 'right', vertical: 'top'}}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                    >
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            {props.error.length !== 0  && props.error[props.error.length - 1][0].msg}
                        </Alert>
                    </Snackbar> 
            } */}
            
        </Box>
    )
}

// const mapStateToProps = (state) => ({
//     error: state.auth.errors,
//     isAuthenticated: state.auth.isAuthenticated,
//     role: state.auth.userrole,
// })

// export default connect(mapStateToProps, {login, register, googleLogin})(Login)

export default Login;