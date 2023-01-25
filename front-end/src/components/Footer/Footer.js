import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import Wave from '../FooterWave/Wave'
import Tower from '../Tower/Tower'
import barcampLogo from '../../image/barcampLogo.png'
import pupaLogo_blue from '../../image/pupa_logo_blue.png'

function Footer() {
    return (
        <Grid container columns={12} sx={{
            width: '100%',
            height: '300px',
            position: 'relative',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            p: '1rem'
        }}>
            <Grid item lg={4} xs={12} textAlign='center' sx={{ backgroundColor: '#fff' }}>
                <Box>
                    <img style={{ width: "30%", height: 180 }} src={pupaLogo_blue} alt="BarcampLogo" href="/" sx={{ display: { xs: 'none', md: 'flex' } }} />
                </Box>
            </Grid>
            <Grid item lg={4} xs={12} textAlign='center' sx={{ backgroundColor: '#fff' }}>
                <Box>
                    <Typography variant='h4' fontWeight='bold'>
                        Contact
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={4} xs={12} textAlign='start' sx={{ backgroundColor: '#fff', position: 'relative' }}>
                <img style={{ width: "55%", height: 180 }} src={barcampLogo} alt="BarcampLogo" href="/" sx={{ display: { xs: 'none', md: 'flex' } }} />
                <Tower/>
            </Grid>
            <Wave />
        </Grid>
    )
}

export default Footer