import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Container, Grid } from '@mui/material';

const projectsData = [
  {
    name: 'TODO LIST WEB APP',
    imageUrl: require('../assets/todo-loggedin.png'), // Replace with your project image URL or local path
    description: "Enabled user registration, task management, and efficient data storage with MongoDB and deployed on Cyclic hosting, resulting in up to a 30% enhanced task completion efficiency. Reduced time spent on task management by 25%, leading to valuable time savings and increased productivity.",
    link: 'https://clever-hare-jeans.cyclic.app/', // Replace with the project URL
  },
  {
    name: 'SCIENTIFIC CALCULATOR USING VOICE',
    imageUrl: require('../assets/CAL-ASSISTANT-1.png'), // Replace with the local path to your image
    description: 'Developed an open-source scientific calculator with voice input capabilities, contributing to fast results in a team of 4 people. Engineered efficient web solutions using Python for the back-end and HTML, Bootstrap, JavaScript, CSS, and Flask for the front-end, resulting in a 30% reduction in development time.',
    link: 'https://github.com/shivam2813', // Replace with the project URL
  },
  {
    name: 'NUMBER PLATE RECOGNITION SYSTEM',
    imageUrl: require('../assets/numberplate.png'), // Replace with the local path to your image
    description: 'This project is a simple License Plate Recognition (LPR) system developed using OpenCV and Tesseract OCR. It captures video from a webcam, detects license plates using Haar cascades, performs Optical Character Recognition (OCR) on the detected plates, and saves images of recognized plates.',
    link: 'https://github.com/shivam2813/number_plate_recognition', // Replace with the project URL
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant='h5' component='h2' align="center" style={{ margin: '5% 0' }} gutterBottom>
        PROJECTS
      </Typography>
      <Grid container spacing={3}>
        {projectsData.map((project, index) => (
          <Grid item key={index} xs={12}>
            <Card elevation={3}>
              <CardMedia component="img" height="200" image={project.imageUrl} alt={project.name} />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Button variant="contained" href={project.link} sx={{backgroundColor:'#ffb400', color:'black','&:hover':{backgroundColor:'white'}}} target="_blank" rel="noopener noreferrer">
                  Go to Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
