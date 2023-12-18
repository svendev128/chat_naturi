import { Box, Button, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/questions";
import { useNavigate } from "react-router-dom";

const Step3 = (props) => {

    const handleNext = (answer) => {
        props.addAnswer(6, 'exercise_pattern', answer);

        navigate('/step6', {replace: true})
    }

    const navigate = useNavigate();
    
    return (
        <Box sx={{display:'flex'}}>
            <Box sx={{width:'50%',top:'20%', left:'35%', position:'absolute'}}>
                <Typography variant='h3'>Exercise Pattern</Typography>
                <p>Choose which exercise pattern best defines you:</p>
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
                    onClick={() => handleNext("sedentary")}
                >
                    Sedentary: little or no exercise 
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
                    onClick={() => handleNext("lightly")}
                >
                    Lightly active: light exercise/sports 1-3 days per week
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
                    onClick={() => handleNext("moderately")}
                >
                    Moderately active: moderate exercise/sports 3-5 days per week 
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
                    onClick={() => handleNext("very")}
                >
                    Very active: heavy exercise/sports 6-7 days per week 
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
                    onClick={() => handleNext("extremely")}
                >
                    Extremely active: very heavy exercise/sports and intense physical work daily or training 2x a day
                </Button>
            </Box>
        </Box>
    )
}

// const mapStateToProps = (state) => ({
//     step: state.question.multiquestion,
// })

export default connect(null, {addAnswer})(Step3)