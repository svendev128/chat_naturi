import { Box } from "@mui/material";
import React from "react";
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';


const Mealplan = () => {
    return (
        <Box sx={{background:'#8B80F9', height:'100%'}}>
            <Box sx={{display:'flex', justifyContent:'space-between', background:'#8B80F9', alignItems:'center'}}>
                <KeyboardArrowLeftSharpIcon style={{color:'white'}} />
                <h6 style={{color:'white'}}>Plano alimentar</h6>
                <MoreVertSharpIcon style={{color:'white'}} />
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-evenly', background:'#8B80F9', alignItems:'center'}}>
                <h6 style={{color:'white', margin:'0'}}>SUN</h6>
                <h6 style={{color:'white', margin:'0'}}>MON</h6>
                <h6 style={{color:'white', margin:'0'}}>TUE</h6>
                <h6 style={{color:'white', margin:'0'}}>WED</h6>
                <h6 style={{color:'white', margin:'0'}}>THU</h6>
                <h6 style={{color:'white', margin:'0'}}>FRI</h6>
                <h6 style={{color:'white', margin:'0'}}>SAT</h6>
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-evenly', background:'#8B80F9', alignItems:'center'}}>
                <h6 style={{color:'white'}}>10</h6>
                <h6 style={{color:'white'}}>11</h6>
                <h6 style={{color:'white'}}>12</h6>
                <h6 style={{color:'white'}}>13</h6>
                <h6 style={{color:'white'}}>14</h6>
                <h6 style={{color:'white'}}>15</h6>
                <h6 style={{color:'white'}}>16</h6>
            </Box>

            <Box sx={{background:'#F5F6FA', padding:'15px', borderRadius:'10px 10px 0 0'}}>
                <Box sx={{display:'flex', background:'white', justifyContent:'space-between', alignItems:'center', borderRadius:'10px', padding:'10px', margin:'10px'}}>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <img src="res_white.png" />
                        <h6>seu planejamento apra hoje</h6>
                    </Box>
                    <img src="chart.png" />
                </Box>
                <Box sx={{background:'white',  borderRadius:'10px', padding:'10px', alignItems:'start', margin:'10px'}}>
                    <h6 style={{color:'black', textAlign:'left'}}>BREAKFAST</h6>
                    <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
                        <img src="meal.png" />
                    </Box>
                    <hr />
                    <br />
                    <hr />
                </Box>
                <Box sx={{background:'white',  borderRadius:'10px', padding:'10px', alignItems:'start', margin:'10px'}}>
                    <h6 style={{color:'black', textAlign:'left'}}>LUNCH</h6>
                    <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
                        <img src="meal.png" />
                    </Box>
                    <hr />
                    <br />
                    <hr />
                </Box>
            </Box>
        </Box>
    )
}

export default Mealplan