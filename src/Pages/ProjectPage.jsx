import React from 'react'
import BgImage from '../assets/images/background.png'; 
import { Box, Typography, Divider } from '@mui/material'
import SideBar from '../Components/SideBar'
import CardGrid from '../Components/GridCard'
import { motion } from 'framer-motion'
const ProjectPage = () => {
    return (
        <>
            <main style={{
                height: '100vh',
                backgroundImage: `url(${BgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display:'flex',
            }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'row' }}>
                    <SideBar />
                    <motion.div
                    initial={{y:'10vh',scale:0.2,opacity:0}}
                    whileInView={{y:0,scale:1,opacity:1}}
                    transition={{type:'spring',stiffness:500,delay:0.5}}
                    >
                        <Typography variant='h3' sx={{
                            marginY: '0px',
                            padding: '50px',
                            width: '80%',
                            paddingLeft: '100px',
                            marginLeft: '100px',
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            textDecoration: 'underline'
                        }}>Project</Typography>
                        </motion.div>
                        
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                borderRightWidth: 5,
                                borderColor: 'black',
                                height: '80%',
                                alignSelf: 'center',
                                overflow: 'hidden',
                            }}
                        />
                        <Box
                        sx={{marginX:'100px',marginTop:'100px',marginLeft:'100px'}}
                        >
                        <CardGrid/>
                        </Box>
                        
                        
                </Box>
                
                
            </main>
        </>
    )
}

export default ProjectPage