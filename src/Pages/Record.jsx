import { Box, Button} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Col, Row } from "react-bootstrap";
// import SwiperCore, { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";


// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";


const Record = () => {
    // SwiperCore.use([FreeMode, Navigation, Thumbs]);
    // const [thumbsSwiper] = useState(null);
    return (
        <Box sx={{background:'#8B80F9', height:'100%'}}>
            <Box sx={{display:'flex', justifyContent:'space-between', background:'#8B80F9', alignItems:'center', padding:'20px'}}>
                <KeyboardArrowLeftSharpIcon style={{color:'white'}} />
                <h6 style={{color:'white'}}>Weight</h6>
                <MoreVertSharpIcon style={{color:'white'}} />
            </Box>

            <Box sx={{display:'flex', justifyContent:'space-between', background:'#8B80F9', alignItems:'center', padding:'20px', marginBottom:'20px'}}>
                <Box>
                    <h6 style={{color:'white', margin:'0'}}>CURRENT</h6>
                    <Box sx={{display:'flex', alignItems:'baseline'}}>
                        <h1 style={{color:'white', margin:'0'}}>53</h1>
                        <h6 style={{color:'white', margin:'0'}}>kg</h6>
                    </Box>
                </Box>
                <img src="weight.png" />
                <Box>
                    <h6 style={{color:'white', margin:'0'}}>TARGET</h6>
                    <Box sx={{display:'flex', alignItems:'baseline'}}>
                        <h1 style={{color:'white', margin:'0'}}>60</h1>
                        <h6 style={{color:'white', margin:'0'}}>kg</h6>
                    </Box>
                </Box>
            </Box>
            

            <Box sx={{background:'white', padding:'15px', borderRadius:'10px 10px 0 0'}}>
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', borderRadius:'10px', padding:'10px', margin:'10px'}}>
                    <h6 style={{color:'black'}}>My Progress</h6>
                    <Button 
                        sx={{background:'#E4DFFF', color:'#7F74E6'}}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        Weekly
                    </Button>
                </Box>
                <img src="weight_graphic.png" />
                <img src="weight_time.png" />
            </Box>
        </Box>
    )
}

export default Record