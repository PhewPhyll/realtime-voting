import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function CardTop({ data, index }) {


  return (
    <Card elevation={4} sx={{
      backgroundColor: `rgba(82 , 226 , 238 , ${4 / (index + 1)})`,
      borderRadius: '1rem',
      position: 'relative',
    }}>
      <CardContent sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '75%'
      }}>
        <Typography fontWeight='bold' noWrap textOverflow='ellipsis' sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          whiteSpace: 'pre-wrap',
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          textAlign : 'center'
        }} variant='h5'>{data.title}</Typography>
        <Typography fontWeight='bold' sx={{
          backgroundColor: '#fff',
          borderRadius: '100%',
          width: '1rem',
          height: '1rem',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} variant='h5'>{data.votes}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardTop