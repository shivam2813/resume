import React from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

const experienceData = [
  {
    company: 'MattsenKumar LLC',
    position: 'Software Developer',
    duration: 'September 2023 - Present',
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
      <Typography variant='h5' component='h2' align="center" style={{ margin: '5% 0' }} gutterBottom>
        EXPERIENCE
      </Typography>
      <Grid container spacing={3}>
        {experienceData.map((experience, index) => (
          <Grid item key={index} xs={12}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {experience.company}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {experience.position} | {experience.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
