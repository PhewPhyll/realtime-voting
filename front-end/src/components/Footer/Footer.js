import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import Wave from '../FooterWave/Wave'
import Tower from '../Tower/Tower'

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
                    logo pupa
                </Box>
            </Grid>
            <Grid item lg={4} xs={12} textAlign='center' sx={{ backgroundColor: '#fff' }}>
                <Box>
                    <Typography variant='h4' fontWeight='bold'>
                        Contact Us
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={4} xs={12} textAlign='center' sx={{ backgroundColor: '#fff', position: 'relative' }}>
                {/* <Tower/> */}
            </Grid>
            <Wave />
        </Grid>
    )
}

export default Footer