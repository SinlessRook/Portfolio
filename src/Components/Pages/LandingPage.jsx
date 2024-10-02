import React from 'react';
import { BgImage } from '../../assets/Images'
import NavBar from '../NavBar';
import Hero from '../Hero';
import { motion } from 'framer-motion'

const LandingPage = () => {
    return (
        <>
            <main style={{
                height: '100vh',
                backgroundImage: `url(${BgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            >


                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: '100vh' }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, type: 'spring', stiffness: 150, delay: 1.5 }}
                >

                    <Hero />
                </motion.div>

            </main>
        </>
    );
}

export default LandingPage;
