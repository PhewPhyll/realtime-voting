import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CardTopic({ Topic, index }) {
    return (
        <Card sx={{ borderRadius: '1rem', height: '100%', backgroundColor: `rgba(225,149,0 , ${0.4 / (index + 1)})` }} elevation={5}>
            <CardContent sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '90%'
            }}>
                <Typography  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    whiteSpace : 'pre-wrap',
                    WebkitLineClamp : 4,
                    WebkitBoxOrient : "vertical"
                }} variant="h4" component="div" align='center' >
                    {Topic}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardTopic