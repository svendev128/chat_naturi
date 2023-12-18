import { Box, Button, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/questions";
import { useNavigate } from "react-router-dom";

const Step3 = (props) => {

    const handleNext = (answer) => {
        props.addAnswer(13, 'meals', answer);

        navigate('/login', {replace: true})
    }

    const navigate = useNavigate();
    
    return (
        <Box sx={{display:'flex'}}>
            <Box sx={{width:'30%',top:'20%', left:'35%', position:'absolute'}}>
                <Typography variant='h3' sx={{marginBottom:'10px'}}>Meals</Typography>
                <p>How many meals do you intend to have per day?</p>
                <Button
                    variant="outlined"
                    sx={{ 
                        width:'100%',
                        height: '56px',
                        borderRadius:'8px',
                        background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                        fontWeight:'700', 
                        fontSize:'16px',
                        color: '#FDFDFD',
                        marginBottom:'10px'
                    }}
                    onClick={() => handleNext("3")}
                >
                    3 meals(breakfast, lunch, and dinner)
                </Button>
                <Button
                    variant="outlined"
                    sx={{ 
                        width:'100%',
                        height: '56px',
                        borderRadius:'8px',
                        background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                        fontWeight:'700', 
                        fontSize:'16px',
                        color: '#FDFDFD',
                        marginBottom:'10px'
                    }}
                    onClick={() => handleNext("4")}
                >
                    4 meals(breakfast, lunch, afternoon snack and dinner)
                </Button>
                <Button
                    variant="outlined"
                    sx={{ 
                        width:'100%',
                        height: '56px',
                        borderRadius:'8px',
                        background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                        fontWeight:'700', 
                        fontSize:'12px',
                        color: '#FDFDFD',
                        marginBottom:'10px'
                    }}
                    onClick={() => handleNext("5")}
                >
                    5 meals(breakfast, lunch, afternoon snack, dinner and supper)
                </Button>
                <Button
                    variant="outlined"
                    sx={{ 
                        width:'100%',
                        height: '56px',
                        borderRadius:'8px',
                        background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                        fontWeight:'700', 
                        fontSize:'10px',
                        color: '#FDFDFD',
                        marginBottom:'10px'
                    }}
                    onClick={() => handleNext("5")}
                >
                    6 meals(breakfast,mid-morning snack, lunch, afternoon snack, dinner and supper)
                </Button>
            </Box>
        </Box>
    )
}

// const mapStateToProps = (state) => ({
//     step: state.question.multiquestion,
// })

export default connect(null, {addAnswer})(Step3)