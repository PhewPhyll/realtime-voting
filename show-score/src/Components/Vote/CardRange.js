import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function CardRange({ data }) {
    return (
        <Card elevation={4}>
            <CardContent sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '75%'
            }}>
                <Typography fontWeight='bold' noWrap textOverflow='ellipsis' sx={{ width: '20rem' }} variant='caption'>{data.title}</Typography>
                <Typography sx={{
                    backgroundColor: 'secondary.main',
                    borderRadius: '100%',
                    width: '0.05rem',
                    height: '0.05rem',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} variant='caption' fontWeight='bold'>{data.votes}</Typography>
            </CardContent>
        </Card>

    )
}

export default CardRange