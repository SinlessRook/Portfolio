import { Box, Typography } from '@mui/material'
import React from 'react'

import MyImage from '../assets/Images/myimage.png';
import SideBar from './SideBar';
import PauseOnHover from './SliderSimple';
import { motion } from 'framer-motion';

const Hero = () => {

    return (
        <>
            <Box sx={{
                marginY: { md: '150px', xs: '50px' }, paddingX: '1rem', display: 'flex', justifyContent: 'center', gap: { md: 1, xs: 0 },
                flexDirection: { md: 'row', xs: 'column' }
            }}>
                <SideBar />
                <Box variant='contained'
                    sx={{
                        display: { md: 'none', xs: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '50px',
                        marginBottom: '0px',
                        marginLeft: '20px',
                        textAlign: 'center',
                        borderRadius: '50%',
                        width: '300px',
                        height: '300px',
                        overflow: 'hidden',
                    }}
                >
                    <motion.img
                        initial={{ y: '10vh', scale: 0.2 }}
                        whileInView={{ y: 0, scale: 1 }}
                        whileHover={{
                            scale: 1.1,
                            cursor: 'pointer',
                            boxShadow: '0px 0px 10px black',
                            borderRadius: '50%',
                        }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        src={MyImage}
                        alt="MyImage"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%',
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        maxHeight: '420px',
                        maxWidth: { md: '60%', xs: '100%' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: { md: '50px', xs: '5px' },
                        marginTop: { md: '50px', xs: '0px' },
                        overflow: 'hidden',

                    }}
                >
                    <motion.div
                        initial={{ y: '10vh', scale: 0.2 }}
                        whileInView={{ y: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, }}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <PauseOnHover />
                    </motion.div>

                </Box>

                <Box variant='outlined'
                    sx={{
                        display: { md: 'flex', xs: 'none' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: { md: '50px', xs: '0px' },
                        textAlign: 'center',
                    }}
                >
                    <motion.img
                        initial={{ y: '10vh', scale: 0.2 }}
                        whileInView={{ y: 0, scale: 1 }}
                        whileHover={{
                            scale: 1.1,
                            cursor: 'pointer',
                            boxShadow: '0px 0px 10px black',
                            borderRadius: '10px',
                        }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        src={MyImage}
                        alt="MyImage"
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