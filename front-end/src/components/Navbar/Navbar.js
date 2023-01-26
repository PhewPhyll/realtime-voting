import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import barcampLogo from '../../image/barcampLogo.png';
import { Typography } from '@mui/material';

function NavBar() {
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;