import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { ProjectText } from '../assets/constants';
import { Button, Link, Typography } from '@mui/material';
import { motion } from 'framer-motion'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function CardGrid() {
  const data = ProjectText
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {data.map((item, index) => (
          <Grid
            key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <motion.div
              initial={{ opacity: 0, scale: 0.5, y: '20px'}}
              whileInView={{ opacity: 1, scale: 1, y: 0,transition:{type: 'spring', stiffness: 120,staggerChildren:1.5,ease:'easeInOut'} }}
              whileHover={{ y: -10,transition:{type: 'spring', stiffness: 150,delay:0} }}
              
              >
            <Item
              sx={{ width: '300px', height: '250px', color: '#3B7778', fontWeight: 'bold', backgroundColor: '#F5F5F5', ":hover": { backgroundColor: '#3B7778', color: '#F5F5F5' } }}>
              <Typography variant="h5" sx={{ marginTop: '20px' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '20px' }}>
                {item.desc}
              </Typography>
              <Button
                variant="contained"
                sx={{ marginTop: '20%',borderRadius:'50px',minWidth:'200px',}}
                onClick={() => window.open(item.url)}
              >
                View
              </Button>


            </Item>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
