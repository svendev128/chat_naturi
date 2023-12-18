import { Box, Button } from "@mui/material";
import React from "react";
import ShortcutSharpIcon from '@mui/icons-material/ShortcutSharp';

const newRecipe = () => {
    return (
        <Box>
            <img src="recipeback.png" alt="New Receipe" width='100%' />
            <Box sx={{margin:'20px'}}>
                <p style={{textAlign:'left', color:'#A199EC'}}>Receitas</p>
                <h3 style={{textAlign:'left', color:'black'}}>Salad with wheat and white egg</h3>
                <p style={{textAlign:'left'}}>This diabetic friendly egg white recipe promotes healthy weight loss, lowers high cholestrol.</p>
                <h3 style={{textAlign:'left'}}>Nutrition Fact</h3>
                <br />
                <hr />
                <br />
                <hr />

                <Box sx={{width:'100%', height:'50px', background:'#F5F6FA', borderRadius:'30px', marginBottom:'10px'}} />
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Button sx={{width:'5%', height:'50px', borderRadius:'10px', background:'#E4DFFF'}}>
                        <ShortcutSharpIcon />
                    </Button>
                    <Button sx={{width:'90%', height:'50px', borderRadius:'10px', background:'#7165E3', color:'white'}}>
                        gerar  nova receita
                    </Button>
                </Box>
            </Box>
        </Box>
    )
} 

export default newRecipe;