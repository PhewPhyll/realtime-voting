import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, colors } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from '@mui/material'
import backend from '../../Services/backend';
import { userContext } from '../../App';
import AlertBox from '../AlertBox/AlertBox';

export default function TopicCard({ data , callback }) {

    const [alert , setAlert] = useState(false)
    const [check , setCheck] = useState(data.status);
    const user = useContext(userContext)

    const checker = () => {
        backend.post('/voted' , {user , id : data._id}).then(res => {
            if(res.data.message !== "Vote to limit."){
                setCheck(!check)
                callback(data)
            }else{
                setAlert(true)
            }
        })
       
    }

    const callbackClose = () => {
        setAlert(false)
    }

    return (
        <Card sx={{ borderRadius: '1rem' }} elevation={4}>
            <CardActionArea sx={{ p : '0.4rem' }} onClick={checker}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    {check ? <CheckCircleIcon color='secondary' sx={{ fontSize: '2.5rem' }} /> : <CircleIcon sx={{ fontSize: '2.5rem' , color : colors.grey['500'] }} />}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <Typography >
                            {data.title}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <AlertBox content="ขณะนี้คุณได้โหวตครบจำนวน 10 ครั้งแล้ว หากต้องการเปลี่ยนหัวข้อ กรุณากดยกเลิกโหวตบางหัวข้อ" alert={alert} callbackClose={callbackClose} />
        </Card>
    );
}
