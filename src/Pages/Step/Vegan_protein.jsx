import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../actions/questions";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";

const Vegan_protein = (props) => {

    const [isBeans, setIsBeans] = useState(false);
    const [isTofu, setIsTofu] = useState(false);
    const [isLentils, setIsLentils] = useState(false);
    const [isChickpeas, setIsChickpeas] = useState(false);
    const [isWholegrains, setIsWholegrains] = useState(false);
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
                        {isBeans ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsBeans(!isBeans)}
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
                        {isLentils ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsLentils(!isLentils)}
            >
                <Box sx={{ order: 0 }}>
                    Lentils
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
                        {isChickpeas ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsChickpeas(!isChickpeas)}
            >
                <Box sx={{ order: 0 }}>
                    Chickpeas
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
                        {isWholegrains ? <CheckIcon sx={{ color: 'green' }} />:""}
                    </Box>
                }
                onClick={() => setIsWholegrains(!isWholegrains)}
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

export default connect(null, {addAnswer})(Vegan_protein)