// Experience.js

import React from 'react';
import CustomCard from './card';
import { Container, Grid, Typography, Box } from '@mui/material';
import image3 from '../assets/microchip.png'
import image1 from '../assets/design.png'
import image2 from '../assets/backend.png'

const Skills = () => {
  const cardData = [
    {
      title: 'Front-end Web Development',
      description: 'Description for Job 1',
      imageUrl: image1,
    },
    {
      title: 'Backend Development',
      description: 'Description for Job 2',
      imageUrl: image2,
    },
    {
      title: 'AI Integration',
      description: 'Description for Job 3',
      imageUrl: image3,
    },
  ];

  return (
    <Container align='center'>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" component="h2" align="center" style={{ margin: '5% 0' }} gutterBottom>
          SKILLS
        </Typography>
        <Grid container spacing={8} justifyContent="center">
          {cardData.map((data, index) => (
            <Grid item key={index} xs={12} sm={4}>
              <CustomCard title={data.title} imageUrl={data.imageUrl} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;
