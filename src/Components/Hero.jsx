import { Box, Typography } from '@mui/material'
import React from 'react'

import MyImage from '../assets/Images/myimage.png';
import SideBar from './SideBar';
import PauseOnHover from './SliderSimple';
import { motion } from 'framer-motion';

const Hero = () => {

    return (
        <>
            <Box sx={{ marginY: '150px', padding: '1rem', display: 'flex', justifyContent: 'center', gap: 1 }}>
                <SideBar />
                <Box
                    sx={{
                        maxHeight: '420px',
                        maxWidth: '60%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '50px',
                        overflow: 'hidden',

                    }}
                >
                    <motion.div
                    initial={{y:'10vh',scale:0.2}}
                    whileInView={{y:0,scale:1}}
                    transition={{type:'spring',stiffness:200,}}
                    style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
                    >
                    <PauseOnHover />
                    </motion.div>
                </Box>

                <Box variant='outlined'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '50px',
                        textAlign: 'center',
                    }}
                >
                    <motion.img
                    initial={{y:'10vh',scale:0.2,}}
                    whileInView={{y:0,scale:1,}}
                    whileHover={{scale:1.1,cursor:'pointer',boxShadow:'0px 0px 10px black',}}
                    transition={{type:'spring',stiffness:200,}}
                    
                        src={MyImage}
                        alt="Myimage"
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Hero