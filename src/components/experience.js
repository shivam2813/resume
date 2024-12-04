import React from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

const experienceData = [
  {
    company: 'EndureAir Systems Pvt Ltd',
    position: 'Software Developer - 1',
    duration: 'Februrary 2024 - Present',
    description: (
      <ul>
        <li> Developed Antenna Tracking System: Enhanced the connection between drones and ground units by 50%, significantly improving communication stability and range.</li>
        <li>Developed Claw System Integration for Drone Payloads: Engineered the integration of a claw mechanism with drones, enabling payload pickup by transmitting PWM signals from a Jetson device to the drone's existing claw system, significantly enhancing operational capabilities.</li>
        <li>Enabled Electromagnet Mechanism for Payloads: Integrated an electromagnet mechanism for drone payloads by sending control signals from Jetson GPIO pins, enhancing versatility in payload handling capabilities.</li>
        <li>Developed Mesh Control System: Enabled simultaneous operation of six drones through an advanced Ground Control Station (GCS), significantly improving coordination and control capabilities.</li>
        <li>Developed an internal system using Electron, React, and Python to reduce UAV log analysis time by over 50%, enabling remote access for field teams to efficiently analyze data and deliver timely insights.</li>
      </ul>
    ),
  },
  {
    company: 'MattsenKumar LLC',
    position: 'Software Developer',
    duration: 'September 2023 - January 2024',
    description: (
      <ul>
        <li>Spearheaded the development of an In-House Authenticator System, reducing mobile device dependency and boosting team productivity by 25%.</li>
        <li>Engineered a Visiting Card Data Extraction Tool using Amazon Textract, slashing data entry time by 50%.</li>
        <li>Devised an intuitive front-end interface, providing real-time access to extracted information and enhancing workflow efficiency by 30%.</li>
      </ul>
    ),
  },
  {
    company: 'MattsenKumar LLC',
    position: 'Software Developer Intern',
    duration: 'February 2023 - September 2023',
    description: (
      <ul>
        <li>Conceptualized and implemented an Attendance Management System, reducing errors by 20% and accelerating reporting by 30%.</li>
        <li>Demonstrated a 25% faster data retrieval potential, showcasing cost-efficient data access.</li>
        <li>Orchestrated a system overhaul, anticipating a 25% efficiency boost and 20% less administrative task time, resulting in significant time and cost savings.</li>
        <li>Fine-tuned GPT-2 and GPT-3 models with customer reviews, enhancing sentiment analysis accuracy.</li>
      </ul>
    ),
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant='h4' component='h2' align="center" style={{ margin: '5% 0' }} gutterBottom>
        EXPERIENCE
      </Typography>
      <Grid container spacing={3}>
        {experienceData.map((experience, index) => (
          <Grid item key={index} xs={12}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{backgroundColor:'#ffb400',paddingLeft:'0.5rem',border:'1px solid #ffb400',borderRadius:'5px',fontSize:'1.8rem'}}>
                  {experience.company}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{marginLeft:'0.6rem',fontSize:'1.1rem'}}>
                  {experience.position} | {experience.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:'0.9rem'}}>
                  {experience.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Experience;
