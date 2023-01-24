import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, colors, Divider, IconButton } from '@mui/material';
import { Box } from '@mui/material'
import backend from '../../Services/backend';
import { userContext } from '../../App';
import AlertBox from '../AlertBox/AlertBox';

//Icon
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function TopicCard({ data, callback }) {

    const [alert, setAlert] = useState(false)
    const [check, setCheck] = useState(data.status);
    const user = useContext(userContext)

    const checker = () => {
        backend.post('/voted', { user, id: data._id }).then(res => {
            if (res.data.message !== "Vote to limit.") {
                setCheck(!check)
                callback(data)
            } else {
                setAlert(true)
            }
        })

    }

    const callbackClose = () => {
        setAlert(false)
    }

    return (
        <Card sx={{ borderRadius: '1rem' }} elevation={4}>
            <CardContent>
                <Typography fontWeight='bold' gutterBottom variant='h5' component='div'>
                    {data.title}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    ml: '1rem',
                    mt: '1rem'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <AccountCircleIcon />
                        <Typography variant='body2'>
                            {data.speaker}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <AccessTimeFilledIcon />
                        <Typography variant='body2'>
                            {data.long_duration ? "1 ชั่วโมง" : "30 นาที"}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <Divider />
            <CardActions sx={{ gap : 1 }}>
                <IconButton color={check ? 'secondary' : 'default'} onClick={checker}>
                    <ThumbUpIcon />
                </IconButton>
                <Typography fontWeight='bold' variant='body2'>{check ? "โหวตแล้ว" : "ยังไม่ได้โหวต"}</Typography>
            </CardActions>
            <AlertBox content="ขณะนี้คุณได้โหวตครบจำนวน 10 ครั้งแล้ว หากต้องการเปลี่ยนหัวข้อ กรุณากดยกเลิกโหวตบางหัวข้อ" alert={alert} callbackClose={callbackClose} />
        </Card>
    );
}
