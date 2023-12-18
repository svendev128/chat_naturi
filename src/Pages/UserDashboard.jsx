import React from "react";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { useEffect } from "react";
import { Box, Button, Grid, LinearProgress, Paper } from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Card, CardBody, CardFooter, CardHeader, Col, Container, ProgressBar, Row } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { Line } from "react-chartjs-2";

function getChartColorsArray(colors) {
    colors = JSON.parse(colors);
    return colors.map(function (value) {
        var newValue = value.replace(" ", "");
        if (newValue.indexOf(",") === -1) {
            var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if (color.indexOf("#") !== -1)
                color = color.replace(" ", "");
            if (color) return color;
            else return newValue;
        } else {
            var val = value.split(',');
            if (val.length === 2) {
                var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
  }

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#8B80F8',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const UserDashboard = () => {
    // let localtime;
    // useEffect(() => {
    //     localtime = new Date();
    //     console.log("time = ", localtime);
    // },[])
    useEffect(() => {
        console.log("New Start")
    },[]);

    const seriesAlimentar = [40];
    const alimentarOptions = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size:'40%',
                }
            },
        },
        labels:['Alimentar'],
    }

    return (
        <Box sx={{width:'90%', margin:'10px auto'}}>
            <Box sx={{float:'right'}}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="aaaa.png" />
                </StyledBadge>
            </Box>
            <Box>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <LightModeOutlinedIcon />
                    <h6 style={{margin:'none'}}>SAT 16 DEC</h6>
                </Box>
                <h1 style={{textAlign:'left', margin:'none'}}>Hi, Amelia</h1>
            </Box>
            <Box sx={{display:'flex', backgroundColor:'#F5F6FA',width:'100%', padding:'10px 30px', alignItems:'center'}}>
                <img src="image.png" width="100px" height="100px" />
                <Box>
                    <h3 style={{textAlign:'left'}}>Health score</h3>
                    <p style={{textAlign:'left'}}>Based on your overall health test, your score is 84 and consider good</p>
                    <p style={{color:'purple', textAlign:'left'}}>Read more</p>
                </Box>
            </Box>

            <Box>
                <h3 style={{textAlign:'left'}}>Metrics</h3>
                <Grid container spacing={2} >
                    <Grid item xs={6} sx={{marginBottom:'10px'}} >
                        <Item sx={{height:'100%', display:'flex', flexDirection:'column'}}>
                            <Card style={{flex:1}}>
                                <CardHeader>
                                    <h4 className="card-title mb-0" style={{textAlign:'left', color:'white'}}>PLANO ALIMENTAR</h4>
                                </CardHeader>
                                <CardBody>
                                    <ReactApexChart
                                        series={seriesAlimentar}
                                        options={alimentarOptions}
                                        type="radialBar"
                                        height={328.7}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <h2 style={{textAlign:'left', color:'white'}}>500cal</h2>
                                    <h4 style={{textAlign:'left', color:'white'}}>PROGRESSO DA DIETA %</h4>
                                </CardFooter>
                            </Card>
                        </Item>
                    </Grid>

                    <Grid item xs={6} sx={{marginBottom:'10px'}}>
                        <Item sx={{ height: '100%', background: '#AF8EFF', display: 'flex', flexDirection: 'column' }}>
                            <Card style={{ flex: 1 }}>
                                <CardHeader>
                                    <h4 className="card-title mb-0" style={{textAlign:'left', color:'white'}}>PESO</h4>
                                </CardHeader>
                                <CardBody>
                                    <GradientCharts dataColors='["--vz-success"]' />
                                </CardBody>
                                <CardFooter>
                                    <h2 style={{textAlign:'left', color:'white'}}>53kg</h2>
                                    <h4 style={{textAlign:'left', color:'white'}}>last update 3m</h4>
                                </CardFooter>
                            </Card>
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item sx={{ background: '#1D87FD', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Card style={{ flex: 1 }}>
                                <CardHeader>
                                    <h4 className="card-title mb-0" style={{textAlign:'left', color:'white'}}>IDADE METABOLICA</h4>
                                </CardHeader>
                                <CardBody>
                                    <h1 style={{color:'black'}}><b>45 ANOS</b></h1>
                                </CardBody>
                                <CardFooter>
                                    <h2 style={{textAlign:'left', color:'white'}}>750ml</h2>
                                    <h4 style={{textAlign:'left', color:'white'}}>last update 3m</h4>
                                </CardFooter>
                            </Card>
                        </Item>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <Item sx={{background:'#4C5A81',height:'100%', display:'flex', flexDirection:'column'}}>
                            <Card style={{flex:1}}>
                                <CardHeader>
                                    <h4 className="card-title mb-0" style={{textAlign:'left', color:'white'}}>META</h4>
                                </CardHeader>
                                <CardBody>
                                    <SimpleRadialbar dataColors='["--vz-success"]' />
                                </CardBody>
                                <CardFooter>
                                    <h2 style={{textAlign:'left', color:'white'}}>PROGRESSO</h2>
                                    <h4 style={{textAlign:'left', color:'white'}}>last update 3m</h4>
                                </CardFooter>
                            </Card>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            
            <Box sx={{marginTop:'50px', background:'#F5F6FA'}}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <img src="res.png" />
                    <p>rank de usuarios</p> 
                </Box>
                <Box>
                    <Grid container spacing={2} >
                        <Grid item xs={6}>
                            <Item sx={{background:'#F5F6FA',height:'100%', display:'flex', flexDirection:'column'}}>
                                <p style={{textAlign:'left'}}>rank perda de peso</p>
                                <LinearProgress variant="determinate" value={10} color="primary" sx={{background:'white'}} />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{background:'#F5F6FA',height:'100%', display:'flex', flexDirection:'column'}}>
                                <p style={{textAlign:'left'}}>rank ganho de peso</p>
                                <LinearProgress variant="determinate" value={100} color="error" sx={{background:'white'}}/>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{background:'#F5F6FA',height:'100%', display:'flex', flexDirection:'column'}}>
                                <p style={{textAlign:'left'}}>Rank fidelidade</p>
                                <LinearProgress variant="determinate" value={90} color="success" sx={{background:'white'}}/>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{background:'#F5F6FA',height:'100%', display:'flex', flexDirection:'column'}}>
                                <p style={{textAlign:'left'}}>usuarios mais focados</p>
                                <LinearProgress variant="determinate" value={70} color="warning" sx={{background:'white'}}/>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box sx={{marginTop:'50px', width:'50%', margin:'50px auto', alignItems:'center'}}>
                <img src="userback.png" width='100%' />
                <p style={{color: '#766BE4', textAlign:'left'}}>EVENTS</p>
                <h6 style={{textAlign:'left'}}><b>indicar perfil de nutricionista</b></h6>
                <p style={{textAlign:'left'}}>faca uma consulta com um nutricionista da Ainutri</p>

                <Box sx={{marginTop:'10px', display:'flex', justifyContent:'space-between'}}>
                    <img src="aaaa.png" style={{width:'30px', height:'30px'}} />
                    <Button sx={{background:'#E4DFFF', color:'#7E73E7'}} >Join</Button>
                </Box>
            </Box>
        </Box>
    )
}

const GradientCharts = () => {
    const series = [{
        name: 'Likes',
        data: [4, 5, 2, 5, 6, 10, 15, 12]
    }];
    var options = {
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false
            },
        },
        stroke: {
            width: 7,
            curve: 'smooth'
        },
    };

    return (
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
                className="apex-charts"
            />
    );
};

const SimpleRadialbar = ({dataColors}) => {
    var chartRadialbarBasicColors = getChartColorsArray(dataColors);
    const series = [40];
    const options = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size:'40%',
                }
            },
        },
        labels:['Meta']
    }
  return (
    <ReactApexChart
            series={series}
            options={options}
            type="radialBar"
            height={328.7}
        />
  )
}

const Radialbar = ({ dataColors }) => {
    const chartRadialbarBasicColors = getChartColorsArray(dataColors);
    const series = [80];
    const options = {
      chart: {
        height: 50,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '40%',
          },
        },
      },
      annotations: {
        position: 'center',
        yaxis: [
          {
            y: 0,
            borderColor: '#ccc',
            borderWidth: 0,
            offsetY: -15,
            offsetX: -15,
            label: {
              borderColor: '#ccc',
              borderWidth: 0,
              text: '<i class="ri-calendar-2-line"></i>',
              textAnchor: 'middle',
              offsetX: -10,
              offsetY: -10,
              style: {
                color: '#777',
                fontSize: '24px',
                fontWeight: 'bold',
              },
            },
          },
        ],
      },
    };
  
    return (
      <ReactApexChart
        series={series}
        options={options}
        type="radialBar"
        height={100}
      />
    );
  };

export default UserDashboard