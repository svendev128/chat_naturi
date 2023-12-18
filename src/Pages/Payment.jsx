import { Box, Button } from "@mui/material";
import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';

const Payment = () => {
    return (
        <Box sx={{width:'90%', margin:'auto'}}>
            <Box>
                <img src="payment.png" alt="Payment Image" />
                <h5 style={{color:'#A6A6A6'}}>GO PREMIUM</h5>
                <h4>Get Unlimited Access</h4>
            </Box>

            <Box>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <CheckCircleIcon color="primary" />
                    <h4> Access to hundreds of guided lessons and science backup programs</h4>
                </Box>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <CheckCircleIcon color="primary" />
                    <h4> Access to hundreds of guided lessons and science backup programs</h4>
                </Box>
            </Box>

            <Box sx={{width:'100%', background:'#7165E4', borderRadius:'10px',margin:'10px', padding:'10px'}}>
                <h4 style={{color:'white', textAlign:'left', paddingLeft:'10px'}}>299.99</h4>
                <h5 style={{color:'#C7C3F4', textAlign:'left', paddingLeft:'10px'}}>24.99/month, economise 179.89</h5>
            </Box>

            <Box sx={{width:'100%', background:'#F5F6FA', borderRadius:'10px',margin:'10px', padding:'10px'}}>
                <h4 style={{color:'black', textAlign:'left', paddingLeft:'10px'}}>39.99</h4>
                <h5 style={{color:'#ABABAC', textAlign:'left', paddingLeft:'10px'}}>economise 179.89 no plan anual</h5>
            </Box>

            <Button 
                sx={{
                    width:'90%', 
                    borderRadius:'10px', 
                    background:'#7165E4', 
                    color:'white',
                    margin:'50px auto'
                }}
                startIcon={<StarIcon />}
            >Go premium</Button>
        </Box> 
    )
}

export default Payment