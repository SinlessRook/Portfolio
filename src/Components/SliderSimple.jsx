import React from "react";
import Slider from "react-slick";
import { HeroText } from '../assets/constants';
import { Box, Typography } from "@mui/material";
import {  motion } from 'framer-motion'

function PauseOnHover() {
  const data = HeroText;
  var settings = {
    infinite: true,
    dots: true,
    slidesToShow: data.length,
    PauseOnHover: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    initialSlide: 2,
    
  };
  return (
    <div
      className="slider-container">
      <Slider
        {...settings}>

        {data.map((item,index) => (
          <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.5, type: 'spring', stiffness: 150,staggerdirection: 1 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'column',
                marginY: {md:'50px',xs:'0px'},
                marginLeft: '50px',
                paddingLeft: {md:'100px',xs:'0px'},
                width: 'auto',
                height: '500px',

              }}>
              <Typography
                sx={{
                  fontSize: {md:'3.5rem',xs:'2.0rem'}, color: '#FFFFFF',
                  justifyContent: 'center', fontWeight: 'medium', textAlign: 'start', width: 'auto'
                }}
              >{item.lineOne}</Typography>
              <Typography
                sx={{
                  fontSize: {md:'3.5rem',xs:'2.0rem'}
                  , color: 'yellowgreen',
                  justifyContent: 'center', fontWeight: 'bold', textAlign: 'start', width: 'auto'
                }}
              >{item.lineTwo}</Typography>
              <Typography
                sx={{
                  fontSize: {md:'3.5rem',xs:'2.0rem'}
                  , color: '#FFFFFF',
                  justifyContent: 'center', fontWeight: 'medium', textAlign: 'start', width: 'auto'
                }}
              >{item.lineThree}</Typography>
            </Box>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}

export default PauseOnHover;


