import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/questions";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";

const Vegan_carbohydrate = (props) => {

    const [isRice, setIsRice] = useState(false);
    const [isBeans, setIsBeans] = useState(false);
    const [isCassava, setIsCassava] = useState(false);
    const [isPotato, setIsPotato] = useState(false);
    const [isOats, setIsOats] = useState(false);
    const [isTapioca, setIsTapioca] = useState(false);
    const [isOthers, setIsOthers] = useState(false);

    const handleNext = (answer) => {
        props.addAnswer(10, 'carbohydrate', answer);

        navigate('/step10', {replace: true})
    }
    const navigate = useNavigate();
    
    return (
        <Box sx={{width:'50%',top:'20%', left:'35%', position:'absolute'}}>
            <Typography variant='h3' sx={{marginBottom:'10px'}}>Carbohydrate</Typography>
            <p>Which carbohydrates would you like to include in your diet?</p>
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
                        {isRice ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsRice(!isRice)}
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
                        {isBeans ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsBeans(!isBeans)}
            >
                <Box sx={{ order: 0 }}>
                    Beans
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
                        {isCassava ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsCassava(!isCassava)}
            >
                <Box sx={{ order: 0 }}>
                    Cassava
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
                        {isPotato ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsPotato(!isPotato)}
            >
                <Box sx={{ order: 0 }}>
                    Potato
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
                        {isOats ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsOats(!isOats)}
            >
                <Box sx={{ order: 0 }}>
                    Whole grains
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
                        {isTapioca ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsTapioca(!isTapioca)}
            >
                <Box sx={{ order: 0 }}>
                    Tapioca
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

export default connect(null, {addAnswer})(Vegan_carbohydrate)