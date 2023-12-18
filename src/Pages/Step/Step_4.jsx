import { Box, Button, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/questions";
import { useNavigate } from "react-router-dom";

const Step4 = (props) => {

    const handleNext = () => {

        navigate('/step5', {replace: true})
    }

    const navigate = useNavigate();
    
    return (
        <Box sx={{display:'flex'}}>
            <Box sx={{width:'30%',top:'10%', left:'35%', position:'absolute'}}>
                <Typography variant='h3' >Your BMR is <b>1446.25</b></Typography>
                <img src='BMR.png' style={{margin:'20px 0'}}/>
                <Typography variant="h6" sx={{textAlign:'left'}}>Basal metabolic rate as BMR is the rate at which the body uses energy while at rest to maintain vital functions such as breathing and keeping warm.</Typography>
                <Button
                    variant="outlined"
                    sx={{ 
                        width:'150%00%',
                        height: '56px',
                        borderRadius:'8px',
                        background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                        fontWeight:'700', 
                        fontSize:'20px',
                        color: '#FDFDFD',
                        margin:'10px 0'
                    }}
                    onClick={() => handleNext()}
                >
                    Continue
                </Button>
            </Box>
            
        </Box>
    )
}

// const mapStateToProps = (state) => ({
//     step: state.question.multiquestion,
// })

export default connect(null, {addAnswer})(Step4)