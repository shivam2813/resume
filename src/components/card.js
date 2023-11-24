// CustomCard.js

import React from 'react';
import { Container,Paper, Typography } from '@mui/material';

const CustomCard = ({ title, description, imageUrl }) => {
  return (
    <Paper elevation={3} style={{ minHeight: '250px',maxHeight: '250px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
      {imageUrl && imageUrl.endsWith('.svg') ? (
        // Handle SVG images
        <img src={imageUrl} alt={title} style={{ objectFit: 'contain', height: '100px', width: '100%' }} />
      ) : imageUrl ? (
        // Handle other image types (local, etc.)
        <img src={imageUrl} alt={title} style={{ objectFit: 'contain', height: '100px', width: '100%' }} />
      ) : null}
      <Container sx={{marginTop:'10px'}}>
        <Typography variant="h5" component="div" align='center' style={{ marginTop: '8px' }}>
          {title}
        </Typography>
      </Container>
    </Paper>
  );
};

export default CustomCard;
