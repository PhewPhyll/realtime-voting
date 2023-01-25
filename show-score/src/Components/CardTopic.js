import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CardTopic({ Topic }) {
    return (
        <Card sx={{ borderRadius : '1rem' }} elevation={5}>
            <CardContent>
                <Typography noWrap variant="h5" component="div" align='center' >
                    {Topic}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardTopic