import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function CardRange({ data }) {
    return (
        <Card elevation={4}>
            <CardContent sx={{ position: 'relative' }}>
                <Typography variant='h6'
                >{data.title}</Typography>
            </CardContent>
        </Card>

    )
}

export default CardRange