import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/questions";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";

const No_protein = (props) => {

    const [isBeef, setIsBeef] = useState(false);
    const [isChicken, setIsChicken] = useState(false);
    const [isEggs, setIsEggs] = useState(false);
    const [isFish, setIsFish] = useState(false);
    const [isPort, setIsPort] = useState(false);
    const [isOthers, setIsOthers] = useState(false);

    const handleNext = (answer) => {
        props.addAnswer(9, 'protein', answer);

        navigate('/step9', {replace: true})
    }
    const navigate = useNavigate();
    
    return (
        <Box sx={{width:'50%',top:'20%', left:'35%', position:'absolute'}}>
            <Typography variant='h3' sx={{marginBottom:'10px'}}>Protein</Typography>
            <p>Which proteins would you like to include in your diet:</p>
            <Button
                variant="outlined"
                sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '56px',
                    borderRadius: '8px',
                    background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                    fontWeight: '700', 
                    fontSize: '20px',
                    color: '#FDFDFD',
                    marginBottom: '10px',
                    "& .MuiButton-label": {
                        order: 2
                    }
                }}
                endIcon={
                    <Box sx={{ order: 1 }}>
                        {isBeef ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsBeef(!isBeef)}
            >
                <Box sx={{ order: 0 }}>
                    Beef
                </Box>
            </Button>
            <Button
                variant="outlined"
                sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '56px',
                    borderRadius: '8px',
                    background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                    fontWeight: '700', 
                    fontSize: '20px',
                    color: '#FDFDFD',
                    marginBottom: '10px',
                    "& .MuiButton-label": {
                        order: 2
                    }
                }}
                endIcon={
                    <Box sx={{ order: 1 }}>
                        {isChicken ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsChicken(!isChicken)}
            >
                <Box sx={{ order: 0 }}>
                    Chicken
                </Box>
            </Button>
            <Button
                variant="outlined"
                sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '56px',
                    borderRadius: '8px',
                    background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                    fontWeight: '700', 
                    fontSize: '20px',
                    color: '#FDFDFD',
                    marginBottom: '10px',
                    "& .MuiButton-label": {
                        order: 2
                    }
                }}
                endIcon={
                    <Box sx={{ order: 1 }}>
                        {isEggs ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsEggs(!isEggs)}
            >
                <Box sx={{ order: 0 }}>
                    Eggs
                </Box>
            </Button>
            <Button
                variant="outlined"
                sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '56px',
                    borderRadius: '8px',
                    background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                    fontWeight: '700', 
                    fontSize: '20px',
                    color: '#FDFDFD',
                    marginBottom: '10px',
                    "& .MuiButton-label": {
                        order: 2
                    }
                }}
                endIcon={
                    <Box sx={{ order: 1 }}>
                        {isFish ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsFish(!isFish)}
            >
                <Box sx={{ order: 0 }}>
                    Fish
                </Box>
            </Button>
            <Button
                variant="outlined"
                sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '56px',
                    borderRadius: '8px',
                    background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                    fontWeight: '700', 
                    fontSize: '20px',
                    color: '#FDFDFD',
                    marginBottom: '10px',
                    "& .MuiButton-label": {
                        order: 2
                    }
                }}
                endIcon={
                    <Box sx={{ order: 1 }}>
                        {isPort ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsPort(!isPort)}
            >
                <Box sx={{ order: 0 }}>
                    Port
                </Box>
            </Button>
            <Button
                variant="outlined"
                sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '56px',
                    borderRadius: '8px',
                    background: 'linear-gradient(180deg, #F3AB82 0%, #E78163 52.08%, #D26B51 99.99%, rgba(224, 119, 90, 0.00) 100%, rgba(225, 121, 92, 0.04) 100%)', 
                    fontWeight: '700', 
                    fontSize: '20px',
                    color: '#FDFDFD',
                    marginBottom: '10px',
                    "& .MuiButton-label": {
                        order: 2
                    }
                }}
                endIcon={
                    <Box sx={{ order: 1 }}>
                        {isOthers ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsOthers(!isOthers)}
            >
                <Box sx={{ order: 0 }}>
                    Others
                </Box>
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
                    onClick={() => handleNext("muscledefinition")}
                >
                    Next
                </Button>
        </Box>
    )
}



export default connect(null,{addAnswer})(No_protein)