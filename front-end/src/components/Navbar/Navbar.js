import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import barcampLogo from '../../image/BARCAMP8xl-removebg-preview.png';
import { Typography } from '@mui/material';

export default function NavBar({used_point}) {
  
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button href='/'>
            <img style={{ height: 50 }} src={barcampLogo} alt="BarcampLogo" href="/" sx={{ display: { xs: 'none', md: 'flex' } }} />
          </Button>
          <Typography fontWeight='bold' variant='h7'>
            Realtime Voting
          </Typography>
          
          <div style={{position: 'absolute', right: '0'}}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px'}} width="18" height="18" fill="red" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
            </svg>
            {10-used_point}
          </div>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}