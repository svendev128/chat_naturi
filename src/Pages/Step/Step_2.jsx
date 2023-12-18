import { Box, Button, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/questions";
import { useNavigate } from "react-router-dom";

const Step2 = (props) => {

    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [isMetric, setIsMetric] = useState(true);

    const handleLogin = () => {
        props.addAnswer(2, 'age', age);
        isMetric ? (
             props.addAnswer(3, 'height',`${height}cm`)
        ) : (
            props.addAnswer(3,'height',`${height}ft`)
        )

        isMetric ? (
            props.addAnswer(4, 'weight',`${weight}kg`)
        ) : (
            props.addAnswer(4,'weight',`${weight}lb`)
        )
        navigate('/step3', {replace: true})
    }

    const navigate = useNavigate();
    
    return (
        <Box sx={{display:'flex'}}>
            <Box sx={{width:'30%',top:'20%', left:'35%', position:'absolute'}}>
                <Typography variant='h3'>Personality</Typography>
                <Box sx={{display: 'flex', margin:'10px 0'}}>
                    <Button 
                        sx={{
                            width:'50%', 
                            border: isMetric ? '1px solid #51BBD5' : '1px solid #ADADAD'  ,
                            background: isMetric ? '#E6FAFF' : '', 
                            borderRadius: isMetric ? '5px 0px 0px 5px' : '',
                            color: isMetric ? '#51BBD5' : '#ADADAD'
                        }}
                        onClick={() => {setIsMetric(true);}}
                    >
                        Metric
                    </Button>
                    <Button 
                        sx={{
                            width:'50%', 
                            border: isMetric ? '1px solid #ADADAD' : '1px solid #51BBD5',
                            background: isMetric ? '' : '#E6FAFF', 
                            borderRadius: isMetric ? '' : '5px 0px 0px 5px',
                            color: isMetric ? '#ADADAD' : '#51BBD5'
                        }}
                        onClick={() => {setIsMetric(false);}}
                    >
                        Imperial
                    </Button>
                </Box>
                <TextField
                    label="Age"
                    type="number"
                    id="outlined-start-adornment"
                    sx={{ 
                        margin: '10px 0', 
                        width: '100%', 
                        borderRadius: '4px',
                    }}
                    value={age}
                    focused
                    required
                    onChange={(e) => setAge(e.target.value)}
                />
                <TextField
                    label="Height"
                    value={height}
                    id="outlined-start-adornment"
                    sx={{ 
                        margin: '10px 0', 
                        width: '100%', 
                        borderRadius: '4px',
                    }}
                    type="number"
                    focused
                    required
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="start">
                            {isMetric ? "cm" : "ft"}
                        </InputAdornment>
                        ),
                    }}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <TextField
                    label="Weight"
                    value={weight}
                    id="outlined-start-adornment"
                    sx={{ 
                        margin: '10px 0', 
                        width: '100%', 
                        borderRadius: '4px',
                    }}
                    type="number"
                    focused
                    required
                    
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="start">
                            {isMetric ? "kg" : "lb"}
                        </InputAdornment>
                        ),
                    }}
                    onChange={(e) => setWeight(e.target.value)}
                />
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
                    Next
                </Button>
            </Box>
        </Box>
    )
}

// const mapStateToProps = (state) => ({
//     step: state.question.multiquestion,
// })

export default connect(null, {addAnswer})(Step2)