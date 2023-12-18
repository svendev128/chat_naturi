import React from "react";
import { Box, Button } from "@mui/material";
import { Card, CardHeader, CardBody, CardFooter } from "react-bootstrap";

const UserProfile = () => {
    return (
        <Box sx={{alignItems: 'center', margin: '20px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
                <img src="aaaa.png" width={'50px'} height={'50px'} style={{borderRadius:'10px'}} alt="User Profile Avatar" />   
            </Box>
            
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Box>
                    <h3 style={{margin:'0'}}>Amelia Sarkar</h3>
                    <h6 style={{color:'#9E96EC', margin:'0'}}>BASIC MEMBER</h6>
                </Box>
                <Button sx={{background:'#E4DFFF', color:'#7569E3'}}>Edit</Button>
            </Box>

            <h6 style={{textAlign:'left'}}>I decided I was going to actively pursue a better life, and take better care of my mind, body and soul</h6>

            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Box>
                    <h6 style={{color:'#9E96EC', margin:'0'}}>WEIGHT</h6>
                    <Box sx={{display:'flex', alignItems:'baseline'}}>
                        <h2 style={{color:'black', margin:'0'}}>53</h2>
                        <h6 style={{color:'#9E96EC', margin:'0'}}>kg</h6>
                    </Box>
                </Box>
                <Box>
                    <h6 style={{color:'#9E96EC', margin:'0'}}>Age</h6>
                    <Box sx={{display:'flex', alignItems:'baseline'}}>
                        <h2 style={{color:'black', margin:'0'}}>24</h2>
                        <h6 style={{color:'#9E96EC', margin:'0'}}>yo</h6>
                    </Box>
                </Box>
                <Box>
                    <h6 style={{color:'#9E96EC', margin:'0'}}>CURRENT</h6>
                    <Box sx={{display:'flex', alignItems:'baseline'}}>
                        <h2 style={{color:'black', margin:'0'}}>165</h2>
                        <h6 style={{color:'#9E96EC', margin:'0'}}>cm</h6>
                    </Box>
                </Box>
            </Box>

            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Card style={{flex:1, background:'#4C5A81', padding:'20px', margin:'20px'}}>
                    <CardHeader>
                        <h6 className="card-title mb-0" style={{textAlign:'left', color:'white'}}>meta</h6>
                    </CardHeader>
                    <CardBody>
                        <img src="meta_profile.png" />
                    </CardBody>
                    <CardFooter>
                        <h2 style={{textAlign:'left', color:'white'}}>PROGRESSO</h2>
                        <h4 style={{textAlign:'left', color:'white'}}>last update 3m</h4>
                    </CardFooter>
                </Card>

                <Card style={{flex:1, background:'#AF8EFF', padding:'20px', margin:'20px'}}>
                    <CardHeader>
                        <h6 className="card-title mb-0" style={{textAlign:'left', color:'white'}}>meta</h6>
                    </CardHeader>
                    <CardBody>
                        <img src="line_profile.png" />
                    </CardBody>
                    <CardFooter>
                        <h2 style={{textAlign:'left', color:'white'}}>58kg</h2>
                        <h4 style={{textAlign:'left', color:'white'}}>last update 3m</h4>
                    </CardFooter>
                </Card>
            </Box>

            <Box sx={{background:'#F5F6FA', borderRadius:'10px', width:'97%', padding:'20px'}}>
                <h6 style={{color:'blue', textAlign:'left'}}>GO PREMIUM</h6>
                <h5 style={{textAlign:'left'}}>seja um mebro premoum e recebe um plano atilmentar atualizado a cada 15 dias</h5>
                <p style={{textAlign:'left'}}>+ um nutricionista de bolso para tirar suas duvidas 24/7 gerar receitas basedas no seu plano alimentar e uma consulta por mes com um dos nossos espec</p>
                <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px', flexDirection: 'row' }}>
                    <img src="aaaa.png" width='50px' height='50px' style={{marginRight:'10px', borderRadius:'10px'}} />
                    <img src="aaaa.png" width='50px' height='50px' style={{marginRight:'10px', borderRadius:'10px'}} />
                    <img src="aaaa.png" width='50px' height='50px' style={{marginRight:'10px', borderRadius:'10px'}} />
                    <img src="aaaa.png" width='50px' height='50px' style={{marginRight:'10px', borderRadius:'10px'}} />
                </Box>
                <Button sx={{background:'#7165E3', color:'white', borderRadius:'10px', width:'100%'}}>Unlock now</Button> 
            </Box>
        </Box>
    )
}

export default UserProfile;