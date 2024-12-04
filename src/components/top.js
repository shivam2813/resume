import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import Skills from './skills';
import image from '../assets/myImage.jpeg'
function Top() {
  return (
    <Container sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" color="#2b2b2b2" fontWeight="bold">
              I'm Shivam Arora, a{' '}
              <span style={{ color: '#ffb400' }}>Software Developer</span>
            </Typography>
            <Typography variant="body1" color="#767676" mt={2}>
              An experienced software developer with a passion for solving complex problems and building innovative solutions. At EndureAir Systems, I enhanced drone communication systems, integrated payload mechanisms, and developed tools that improved operational efficiency. Previously, at MattsenKumar LLC, I led the creation of an in-house Authenticator and data extraction tools, boosting team productivity by 25%. With expertise in Python, React.js, AWS, and IoT, I’m always looking for new challenges to tackle and improve workflows.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={image}
              // src="https://i.ibb.co/k0CmfBk/shivam-pic-for-website.jpg"
              alt="shivam-pic-for-website"
              style={{objectFit: 'contain', height: '300px', width: '100%', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      </Paper>
      <Skills/>
    </Container>
  );
}

export default Top;
