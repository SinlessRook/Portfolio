import * as React from 'react';
;
import { Box} from '@mui/material';

import Github from '../assets/Images/github.svg'
import Insta from '../assets/Images/instgram.svg'
import Linkedin from '../assets/Images/linkedIn.svg'
import { motion } from 'framer-motion'




export default function SideBar() {
    return (

        <Box sx={{
            backgroundColor: 'rgba(34, 151, 153, 0.1)'
            , position: 'absolute', left: 0, minHeight: '500px',
             display: {md:'flex', xs:'none'}, 
             flexDirection: 'column',
             
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
            zIndex: 100,
        }}>
            
                
                <a href="https://www.linkedin.com/in/adithyan-a-s/">
                <motion.img
                initial={{ y: '10vh', scale: 0.2, opacity: 0 }}
                whileInView={{ y: 0, scale: 1, opacity: 1 }}
                whileHover={{scale:1.2,}}
                transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
                src={Linkedin} alt="" />
                </a>
                
                <a href="https://www.instagram.com/sinless_rook/">
                <motion.img
                href="https://www.instagram.com/sinless_rook/"
                initial={{ y: '10vh', scale: 0.2, opacity: 0 }}
                whileInView={{ y: 0, scale: 1, opacity: 1 }}
                whileHover={{scale:1.2,}}
                transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
                src={Insta} alt="" />
                </a>
                <a href="https://github.com/SinlessRook">
                <motion.img
                initial={{ y: '10vh', scale: 0.2, opacity: 0 }}
                whileInView={{ y: 0, scale: 1, opacity: 1 }}
                whileHover={{scale:1.2,}}
                transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
                style={{hover:{scale:2}}}
                src={Github} alt="" />
                </a>

        </Box>
    );
}