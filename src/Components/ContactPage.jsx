import React from 'react'
import BgImage from '../assets/images/bg.png';
import { Box, Card, Typography, TextField, Button, CardMedia } from '@mui/material';
import LocationImg from '../assets/Images/location.png';
import PhoneImg from '../assets/Images/Phone.png';
import EmailImg from '../assets/Images/Gmail.png';
import { Translate } from '@mui/icons-material';


const ContactPage = () => {
    return (
        <>
            <main style={{
                height: '100vh',
                backgroundImage: `url(${BgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
                alignItems: 'center'
            }}
            >
                <Box sx={{ display: 'grid',
                     justifyContent: 'center', 
                     alignItems: 'center', 
                     gap: 2,position:'relative',
                     scale: {md:1,xs:0.7},
                     }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: { md: 4, xs: 1 }, alignItems: 'center',position:'relative',zIndex:1,top:'80px' }}>
                        <Card 
                        onClick={()=>window.open('https://www.google.com/maps/place/Kochi+City,+Kerala/@10.7777,76.7777,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x2d3a0f9c3d2d3a0f!8m2!3d10.7777!4d76.7777')}
                        sx={{
                            padding: 2, minWidth: { sx: '90px', md: '200px' }, height: { xs: '150px', md: '190px' }, display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center',
                            transition: 'transform 0.3s ease-in-out', 
                            ":hover": {
                                cursor: 'pointer',
                                transform: 'translateY(-10px)', 
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                            }
                        }}>
                            <img src={LocationImg} alt="" />
                            <br />
                            <Typography sx={{ fontWeight: 'bold', fontSize: {xs:15,md:20} }}>Kochi</Typography>
                        </Card>
                        <Card
                        onClick={()=>window.open('tel:9944557788')}
                        sx={{
                            padding: 2, minWidth: { sx: '90px', md: '200px' }, 
                            height: { xs: '150px', md: '190px' },
                            width: { xs: '140px', md: '200px' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center',
                            transition: 'transform 0.3s ease-in-out', 
                            ":hover": {
                                cursor: 'pointer',
                                transform: 'translateY(-10px)', 
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                            }
                        }}>
                            <img src={PhoneImg} alt="" />
                            <br />
                            <Typography sx={{ fontWeight: 'bold', fontSize: {xs:15,md:20} }}>9944557788</Typography>
                        </Card>
                        <Card 
                        onClick={()=>window.open('mailto:X7V8H@example.com')}
                        sx={{
                            padding: 2, minWidth: { sx: '90px', md: '200px' }, height: { xs: '150px', md: '190px' }, display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center',
                            transition: 'transform 0.3s ease-in-out', 
                            ":hover": {
                                cursor: 'pointer',
                                transform: 'translateY(-10px)', 
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                            }
                        }}>
                            <img src={EmailImg} alt="" />
                            <br />
                            <Typography sx={{ fontWeight: 'bold', fontSize: {xs:15,md:20} }}>X7V8H@example.com</Typography>
                        </Card>
                    </Box>
                    <Box sx={{
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: { xs: '300px', sm: '400px', md: '800px' },
                        justifyContent: 'center',
                        backgroundColor: '#3B7778', borderRadius: 2
                    }}>
                        <br />
                        <br/>
                        <Typography variant="h6" sx={{
                            alignItems: 'center',

                            textAlign: 'center', marginBottom: 2,
                            color: 'white', fontWeight: 'bold', fontSize: 40, justifyContent: 'center'
                        }}>
                            Write To Me
                        </Typography>
                        <TextField required variant="filled" label="Name" fullWidth sx={{ marginBottom: 2, backgroundColor: 'white' }} />
                        <TextField required variant="filled" label="Email" fullWidth sx={{ marginBottom: 2, backgroundColor: 'white' }} />
                        <TextField required variant="filled" label="Message" fullWidth multiline rows={4} sx={{ marginBottom: 2, backgroundColor: 'white' }} />
                        <Button variant="contained" sx={{
                            color: '#3B7778',
                            marginBottom: 2, backgroundColor: 'white', borderRadius: '50px',
                            width: '200px',
                        }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </main>
        </>
    )
}

export default ContactPage