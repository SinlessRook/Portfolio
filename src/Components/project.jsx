import React from 'react'
import BgImage from '../assets/images/bg.png'; 
import { Box, Typography, Divider } from '@mui/material'
import SideBar from './SideBar.jsx'
import CardGrid from './GridCard.jsx'
import { motion } from 'framer-motion'
const ProjectPage = () => {
    return (
        <>
            <Box sx={{
                minHeight: '100vh',
                paddingY: { md: '15px', xs: '20px' },
                backgroundImage: `url(${BgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display:'flex',
                flexDirection: {md:'row',xs:'column'},
            }}
            >
                <Box sx={{ display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                     height: '100%', flexDirection:{md:'row',xs:'column'} }}>
                    <SideBar />
                    <motion.div
                    initial={{y:'10vh',scale:0.2,opacity:0}}
                    whileInView={{y:0,scale:1,opacity:1}}
                    transition={{type:'spring',stiffness:500,delay:0.5}}
                    >
                        <Typography variant='h3' sx={{
                            marginY: '0px',
                            padding: '50px',
                            width: '50%',
                            paddingLeft: {md:'100px',xs:'20px'},
                            marginLeft: {md:'100px',xs:'20px'},
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            textDecoration: 'underline'
                        }}>Project</Typography>
                        </motion.div>
                        <Divider
                        
                        />
                        <Box
                        sx={{marginX:'100px',marginTop:{md:'100px',xs:0},marginLeft:'100px'}}
                        >
                        <CardGrid/>
                        </Box>
                        
                        
                </Box>
                
                
            </Box>
        </>
    )
}

export default ProjectPage