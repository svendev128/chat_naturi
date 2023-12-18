import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/questions";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";

const Step10 = (props) => {

    const [isSpinach, setIsSpinach] = useState(false);
    const [isBroccoli, setIsBroccoli] = useState(false);
    const [isCauliflower, setIsCauliflower] = useState(false);
    const [isCucumber, setIsCucumber] = useState(false);
    const [isTomato, setIsTomato] = useState(false);
    const [isBeetroot, setIsBeetroot] = useState(false);
    const [isChayote, setIsChayote] = useState(false);
    const [isEggplant, setIsEggplant] = useState(false);
    const [isChard, setIsChard] = useState(false);
    const [isOthers, setIsOthers] = useState(false);

    const handleNext = (answer) => {
        props.addAnswer(11, 'vegetable', answer);

        navigate('/step11', {replace: true})
    }
    const navigate = useNavigate();
    
    return (
        <Box sx={{width:'50%',top:'20%', left:'35%', position:'absolute'}}>
            <Typography variant='h3' sx={{marginBottom:'10px'}}>vegetable</Typography>
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
                        {isSpinach ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsSpinach(!isSpinach)}
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
                        {isBroccoli ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsBroccoli(!isBroccoli)}
            >
                <Box sx={{ order: 0 }}>
                    Broccoli
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
                        {isCauliflower ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsCauliflower(!isCauliflower)}
            >
                <Box sx={{ order: 0 }}>
                    Cauliflower
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
                        {isCucumber ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsCucumber(!isCucumber)}
            >
                <Box sx={{ order: 0 }}>
                    Cucumber
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
                        {isTomato ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsTomato(!isTomato)}
            >
                <Box sx={{ order: 0 }}>
                    Tomato
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
                        {isBeetroot ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsBeetroot(!isBeetroot)}
            >
                <Box sx={{ order: 0 }}>
                    Beetroot
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
                        {isChayote ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsChayote(!isChayote)}
            >
                <Box sx={{ order: 0 }}>
                    Chayote
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
                        {isEggplant ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsEggplant(!isEggplant)}
            >
                <Box sx={{ order: 0 }}>
                    Eggplant
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
                        {isChard ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsChard(!isChard)}
            >
                <Box sx={{ order: 0 }}>
                    Chard
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

export default connect(null, {addAnswer})(Step10)