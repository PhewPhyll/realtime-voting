import { Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

import Wave from '../FooterWave/Wave'
import Tower from '../Tower/Tower'
import barcampLogo from '../../image/barcampLogo.png'
import pupaLogo_blue from '../../image/pupa_logo_blue.png'
import './Sun.css'

function Footer() {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('xl'))

    return (
        <Grid container rowGap={3} columns={12} sx={{
            position: 'relative',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            mt: 'auto',
            width : '100%',
            alignItems : 'center',
            justifyContent : 'center',
            pt : '1rem',
            pb : '5rem',
            overflow : 'hidden'
        }}>
            <Grid item xl={4} xs={12} sx={{ textAlign : 'center' }}>
                <img width={matches ? '80' : '100'} src={pupaLogo_blue} alt="BarcampLogo" />
            </Grid>
            <Grid item xl={4} xs={12} sx={{ textAlign : 'center'  }}>
                <img width={matches ? '150' : '300'} src={barcampLogo} alt="BarcampLogo" />
            </Grid>
            {/* <Grid item xl={4} xs={12} sx={{ textAlign : 'center' }}>
                <Typography variant='subtitle1' fontWeight='bold'>Created by PUPA</Typography>
            </Grid> */}
            <Wave />
            <Tower />
            <div className='sun'  />
        </Grid>
    )
}

export default Footer