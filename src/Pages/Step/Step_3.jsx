import { Box, Button, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/questions";
import { useNavigate } from "react-router-dom";

const Step3 = (props) => {

    const handleNext = (answer) => {
        props.addAnswer(5, 'step3', answer);

        navigate('/step4', {replace: true})
    }

    const navigate = useNavigate();
    
    return (
        <Box sx={{display:'flex'}}>
            <Box sx={{width:'30%',top:'20%', left:'35%', position:'absolute'}}>
                <Typography variant='h3' sx={{marginBottom:'10px'}}>Body Biotype</Typography>
                <Button
                    variant="outlined"
                    sx={{ 
                        width:'100%',
                        height: '56px',
                        borderRadius:'8px',
                        background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                        fontWeight:'700', 
                        fontSize:'20px',
                        color: '#FDFDFD',
                        marginBottom:'10px'
                    }}
                    onClick={() => handleNext("option1")}
                >
                    Option 1
                </Button>
                <Button
                    variant="outlined"
                    sx={{ 
                        width:'100%',
                        height: '56px',
                        borderRadius:'8px',
                        background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                        fontWeight:'700', 
                        fontSize:'20px',
                        color: '#FDFDFD',
                        marginBottom:'10px'
                    }}
                    onClick={() => handleNext("option2")}
                >
                    Option 2
                </Button>
                <Button
                    variant="outlined"
                    sx={{ 
                        width:'100%',
                        height: '56px',
                        borderRadius:'8px',
                        background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                        fontWeight:'700', 
                        fontSize:'20px',
                        color: '#FDFDFD',
                        marginBottom:'10px'
                    }}
                    onClick={() => handleNext("option3")}
                >
                    Option 3
                </Button>
            </Box>
        </Box>
    )
}

// const mapStateToProps = (state) => ({
//     step: state.question.multiquestion,
// })

export default connect(null, {addAnswer})(Step3)