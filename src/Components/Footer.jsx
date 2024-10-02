import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'black',
                color: '#F5F5F5',
                padding: '20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap:2
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} All rights reserved.
            </Typography>
            <Typography variant="body2">
                Designed and made by Adithyan A S
            </Typography>

        </Box>
    );
};

export default Footer;
