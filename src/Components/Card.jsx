import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, IconButton, CardMedia } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { AboutText } from '../assets/constants';
import { motion } from 'framer-motion'
const HorizontalCarousel = () => {
  const items = AboutText

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        handleNext();
      }
    }, 6000); // Scroll every 10 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        marginX: {md:'20%',xs:"10px"}
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0.2, }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5}}
      >
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.3s ease',
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {/* Carousel items */}
          {items.map((item) => (
            <Card
              key={item.id}
              sx={{
                minWidth: '100%',
                minHeight: {md:'500px',xs:'300px'},
                height: {md:'auto',xs:'500px'},
                background: item.gradient,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CardMedia sx={{ width: '100%', height: {md:'280px',xs:'200px'}, objectFit: 'cover', margin: 0 }}>
                <motion.img
                  initial={{ opacity: 0, scale: 0.5, rotateZ: 90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  whileHover={{ boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.5)', scale: 1.1, transition: { duration: 3.2 } }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 150, delay: 0.2 }}
                  src={item.url} alt={item.text} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </CardMedia>
              <CardContent sx={{ textAlign: 'center' }}>

                <Typography variant="h3" color="white">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ color: 'yellow', scale: 1.1, textDecoration: 'underline', cursor: 'pointer' }}
                    transition={{ duration: 1.5, type: 'spring', stiffness: 150 }}
                  >
                    {item.text}
                  </motion.div>
                </Typography>
                <motion.div
                  initial={{ opacity: 0, scale: 1.5, rotateZ: 45, y: '10px', }}
                  whileInView={{ opacity: 1, scale: 1, rotateZ: 0, y: '0px', }}
                  transition={{ duration: 1.5, type: 'spring', stiffness: 150, delay: 0.8, staggerChildren: 0.5, staggerDirection: -1 }}
                >
                  <Typography variant="body1" color="white" sx={{ mt: 1 }}>
                    {item.subText.length == 1 ? <Typography>
                      {(item.subText.toString()).split("Adithyan")[0]}
                      <motion.span initial={{ scale: 1 }} whileHover={{ scale: 2,color:'yellow',cursor:'pointer'}} transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}>Adithyan</motion.span>
                      {(item.subText.toString()).split("Adithyan")[1]}
                      </Typography> :
                      <>
                        {item.subText.map((text, index) => text.search(':') > 0 ?
                          <>
                            <motion.div
                            initial={{ scale: 1, originX: 0, originY: 0 }}
                            whileHover={{ scale: 1.1, originX: 0, originY: 0 }}
                            transition={{ duration: 0.3,type: 'spring', stiffness: 200 }} 
                            >
                            <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1, justifyContent: 'start' }}>
                                
                                <Typography
                                  key={index}
                                  sx={{ fontWeight: 'bold' }}>{text.split(":")[0]}:</Typography>
                             {text.split(":")[1]}
                            </Typography>
                            </motion.div>
                          </>
                          :
                          <>
                            <motion.div
                            id={index}
                            initial={{ scale: 1,}}
                            whileHover={{ scale: 1.1,}}
                            transition={{ duration: 0.3,type: 'spring', stiffness: 200 }} 
                            >
                            <Typography >{text}</Typography>
                            </motion.div>
                           
                          </>
                        )}</>}
                  </Typography>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '16px',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <ArrowBack style={{ color: 'white' }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '16px',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <ArrowForward style={{ color: 'white' }} />
        </IconButton>

        {/* Dots for Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {items.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? '#229799' : 'lightgray',
                mx: 1,
                cursor: 'pointer',
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Box>
      </motion.div>
    </Box>

  );
};

export default HorizontalCarousel;
