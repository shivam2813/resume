import React from 'react';
import { AppBar, Button, Container, Toolbar, Typography, Box, ButtonBase } from '@mui/material';

function Header({ onSelectComponent }) {
  const handleLinkedInClick = () => {
    // Replace 'your-linkedin-profile' with your actual LinkedIn profile URL
    window.location.href = 'https://www.linkedin.com/in/shivamarora1314/';
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#ffb400' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">Portfolio</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              margin:'0 2%',
              alignItems: 'center',
            }}
          >
            <ButtonBase>
            <Typography
              variant="subtitle1"
              sx={{ '&:hover': { color: 'black' },cursor: 'pointer' }}
              onClick={() => onSelectComponent('Top')}
            >
              About
            </Typography>
            </ButtonBase>
            <ButtonBase>
            <Typography
              variant="subtitle1"
              sx={{ '&:hover': { color: 'black' } ,cursor: 'pointer'}}
              onClick={() => onSelectComponent('Projects')}
            >
              Projects
            </Typography>
            </ButtonBase>
            <ButtonBase>
            <Typography
              variant="subtitle1"
              sx={{ '&:hover': { color: 'black'},cursor: 'pointer' }}
              onClick={() => onSelectComponent('Experience')}
            >
              Experience
            </Typography>
            </ButtonBase>
          </Box>
          <Button
            variant="contained"
            sx={{
              color: 'black',
              backgroundColor: 'white',
              '&:hover': { backgroundColor: 'black', color: 'white' },
            }}
            onClick={handleLinkedInClick}
          >
            Contact Me
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
