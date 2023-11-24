import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '50px', backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography>
              Email: your.email@example.com
            </Typography>
            <Typography>
              Phone: +123 456 7890
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <div>
              <Link href="https://www.linkedin.com/in/shivamarora1314/" color="inherit" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </div>
            <div>
              <Link href="https://github.com/shivam2813" color="inherit" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
