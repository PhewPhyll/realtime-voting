import { Box, Card, CardContent, colors, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

//Icon
import StarIcon from '@mui/icons-material/Star';

function CardTop({ data , index }) {

    const [variant , setVariant] = useState("")
    const [color , setColor] = useState("")

    useEffect(() => {

        if(index === 0){
            setVariant('h2')
            setColor("#F9C800")
        }

        if(index === 1){
            setVariant('h3')
            setColor("#D0D0D0")
        }

        if(index === 2){
            setVariant('h4')
            setColor("#E75624")
        }

    },[])

  return (
    <Card elevation={4} sx={{
        backgroundColor : `rgb(${82 + (index * 50)} , 226 , 238)`,
        borderRadius : '1rem',
        position : 'relative',
        height : 200 - (index * 50) + 'px'
    }}>
        <CardContent sx={{ 
            display : 'flex',
            justifyContent : 'space-between',
            alignItems : 'center',
            height : '75%'
     }}>
            <Typography variant={variant}>{data.title}</Typography>
            <Typography sx={{
                backgroundColor : '#fff',
                borderRadius : '100%',
                width : (5 / (index + 1)) + 'rem',
                height : (5 / (index + 1)) + 'rem',
                padding : '1rem',
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center'
            }} variant={variant}>{data.votes}</Typography>
        </CardContent>
        <StarIcon sx={{
            position : 'absolute',
            top : 0,
            right : 0,
            fontSize : 70 - (index * 15) + 'px',
            color : color,
        }} />
    </Card>
  )
}

export default CardTop