import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function CardRange({ data, index, maxVote }) {
    return (
        <Card elevation={4}>
            <CardContent sx={{ position: 'relative' }}>
                <Typography sx={{
                    position: 'relative',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    width : 'fit-content',
                    padding : '0.3rem',
                    borderRadius : '0.3rem'
                }} variant='h6'
                >{data.title}</Typography>
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 18,
                    top: '50%',
                    transform: 'translate(0 , -30%)',
                }}>
                    <AnimatePresence>
                        <motion.div
                            layout
                            initial={{ width: 0 }}
                            animate={{ width: (data.votes / maxVote) * 100 + "%" }}
                            style={{
                                marginTop: '1rem',
                                height: '0.5rem',
                                backgroundColor: `rgb(${50 + (index * 3)} , ${60 + (index * 10)} , ${70 + (index * 30)})`,
                                borderRadius: '3px',
                                position: 'relative'
                            }}>
                            <Typography sx={{
                                color : '#fff',
                                position: 'absolute',
                                top: -12,
                                right: 0,
                                backgroundColor: `rgb(${50 + (index * 3)} , ${60 + (index * 10)} , ${70 + (index * 30)})`,
                                padding: '0.3rem',
                                borderRadius: '10px'
                            }} variant='body1'>{data.votes} vote</Typography>
                        </motion.div>
                    </AnimatePresence>
                </Box>
            </CardContent>
        </Card>

    )
}

export default CardRange