import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/questions";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";

const Pescetarian_protein = (props) => {

    const [isFish, setIsFish] = useState(false);
    const [isSeafood, setIsSeafood] = useState(false);
    const [isEgg, setIsEgg] = useState(false);
    const [isYogurt, setIsYogurt] = useState(false);
    const [isTofu, setIsTofu] = useState(false);
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
                        {isSeafood ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsSeafood(!isSeafood)}
            >
                <Box sx={{ order: 0 }}>
                    Seafood
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
                        {isEgg ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsEgg(!isEgg)}
            >
                <Box sx={{ order: 0 }}>
                    Egg
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
                        {isYogurt ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsYogurt(!isYogurt)}
            >
                <Box sx={{ order: 0 }}>
                    Yogurt
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
                        {isTofu ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsTofu(!isTofu)}
            >
                <Box sx={{ order: 0 }}>
                    Tofu
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

export default connect(null, {addAnswer})(Pescetarian_protein)