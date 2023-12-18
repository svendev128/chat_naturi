import React, { useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { addAnswer } from "../actions/questions";
import { connect } from "react-redux";
const Main = (props) => {

  

  const handleClick = (answer) => {
    props.addAnswer(1, 'gender', answer);
    navigate('/step2', {replace: true});
  }
  
  const navigate = useNavigate();

  return (
    <section>
      <Header />
      <Box>
        <Box height='93vh' sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', alignItems:'center'}}>
          <Box sx={{width:'30%'}}>
            <Typography variant="h2" sx={{textAlign:'left'}}>Welcome to AI Nutri - The future of personalized nutrition!</Typography>
            <Typography variant="h6" sx={{textAlign:'left'}}>Welcome to Ainutri, your definitive solution for personalized eating plans! With the help of Nai, our artificial intelligence assistant, we offer you a meal plan that adapts to your needs, schedule and available ingredients. Explore our website and discover how we can transform your life!</Typography>
            <Box sx={{display:'flex', justifyContent:'space-evenly', marginTop:'30px'}}>
              <Button variant="contained" onClick={()=> handleClick('male')}>Male</Button>
              <Button variant="contained" sx={{backgroundColor:'red'}} onClick={()=>handleClick('female')}>Female</Button>
            </Box>
          </Box>
          <Box sx={{display:'flex'}}>
            <img src="image1_1.png" />
          </Box>
        </Box>
          
        <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center', backgroundColor:'lightgreen', padding:'30px'}}>
          <Box sx={{display:'flex'}}>
            <img src="image2.png" style={{borderRadius:'50%'}}/>
          </Box>
          <Box sx={{width:'30%'}}>
            <Typography variant="h3" sx={{textAlign:'left'}}>Customization to the extreme</Typography>
            <Typography variant="h6" sx={{textAlign:'left'}}>Remember, when we talk about personalization, we're talking about true personalization. With AI Nutri, you can create a specific eating plan to gain weight or lose weight. You can create a meal plan for your children, indicate what time you wake up and your plan will be adjusted according to your routine. You can even let us know that your diet that week will be based on white rice and eggs. Our artificial intelligence will create a plan for you based on the ingredients you have at home.</Typography>
          </Box>
        </Box>

        <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center', padding:'30px'}}>
          <Box sx={{width:'30%'}}>
              <Typography variant="h2" sx={{textAlign:'left'}}>Discover true personalization with AI Nutri!</Typography>
              <Typography variant="h6" sx={{textAlign:'left'}}></Typography>
          </Box>
          <Box sx={{display:'flex'}}>
            <Button variant="contained" sx={{borderRadius:'100px', width: '400px', height:'200px', fontSize:'40px'}}>I want this!</Button>
          </Box>
        </Box>
        <Box sx={{display:'flex', background:'lightgreen'}} >
          <Box sx={{width:'50%'}}>
            <Typography variant="h2">Discover How It Works?</Typography>
            <img src="image3.png" style={{borderRadius:'20%'}} />
          </Box>
        </Box>

        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center', background:'green'}}>
          <Box sx={{width:'40%'}}>
            <Typography variant="h2" sx={{color:'black'}}>Benefits</Typography>
            <Typography variant="h6" sx={{color:'white'}}>Discover the benefits of a personalized eating plan with the support of Nai, artificial intelligence. See how our customers have experienced mood improvements, increased energy, weight loss, muscle gain and more</Typography>
          </Box>
          <Box>
            <Button variant="contained" sx={{borderRadius:'20%', width:'80%', height:'100px'}}>I want this!</Button>
          </Box>
        </Box>

        <Box>

        </Box>

      </Box>
      <Footer />
    </section>
  );
};

// const mapStateToProps = (state) => ({
//   token: state.auth.token,
//   role: state.auth.role,
// });

export default connect(null, {addAnswer})(Main);
// export default Main;
