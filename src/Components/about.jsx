import { Box, Typography } from '@mui/material'
import React from 'react'
import HorizontalCarousel from './Card.jsx'
import BgImage from '../assets/images/bg.png'; 
import SideBar from './SideBar.jsx'
import { motion } from 'framer-motion'


const AboutPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <>
            <Box
            sx={{
                height: '100vh',
                    backgroundImage: `url(${BgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
            }}
            >
                <motion.div
                initial={{opacity:0,scale:0.2}}
                whileInView={{opacity:1,scale:1}}
                whileHover={{scale:1.2,originX:0,originY:0}}
                viewport={{amount:0.5}}
                transition={{type:'spring',stiffness:200,}}
                >
                <Typography variant='h3' sx={{
                    marginY: '0px',
                    width: '100%',
                    padding: '50px',
                    marginLeft: '100px',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    fontSize: {
                        xs: '2.5rem',
                        md: '3rem',
                    }

                }}>About Me</Typography>
                </motion.div>

                <Box sx={{ padding: {md:'1rem',xs:'0rem'}, display: 'flex', justifyContent: 'center', gap: {md:2,xs:0} }}>
                    <SideBar />
                    <HorizontalCarousel/>
                </Box>

            </Box>
        </>
    )
}

export default AboutPage