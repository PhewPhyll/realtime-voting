import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CardTopic({ Topic , index }) {
    return (
        <Card sx={{ borderRadius : '1rem' , height : '100%' , backgroundColor : `rgba(82 , 226 , 238 , ${0.4 / (index + 1)})` }} elevation={5}>
            <CardContent sx={{
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center',
                height : '80%'
            }}>
                <Typography noWrap variant="h4" component="div" align='center' >
                    {Topic}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardTopic