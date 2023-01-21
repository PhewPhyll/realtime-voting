import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import barcampLogo from '../../image/barcampLogo.png';
import './Navbar.css';

function WebBar() {
  return (
    <AppBar position="static" style={{ background: "#000000"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button href='/'>
            <img style={{ width: "100%", height: 50}} src={barcampLogo} alt="BarcampLogo" href="/"  sx={{ display: { xs: 'none', md: 'flex' }}}/>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default WebBar;