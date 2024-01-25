import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions, colors } from '@mui/material';
import { Box } from '@mui/material'
import backend from '../../Services/backend';
import { userContext } from '../../App';
import AlertBox from '../AlertBox/AlertBox';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

//Icon
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CategoryIcon from '@mui/icons-material/Category';

export default function TopicCard({ data, callback, index }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const dialogSize = isMobile ? 'sm' : 'lg';
    const [alert, setAlert] = useState(false)
    const [check, setCheck] = useState(data.status);
    const user = useContext(userContext)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const checker = () => {
        backend.post('/voted', { user, id: data._id }).then(res => {
            if (res.data.message !== "Vote to limit.") {
                setCheck(!check)
                callback(data)
                handleClose()
            } else {
                setAlert(true)
                handleClose()
            }
        }).catch(() => window.location.reload())

    }

    const callbackClose = () => {
        setAlert(false)
    }

    return (
        <div>

            <Card sx={{ borderRadius: '1rem' }} elevation={4} onClick={handleClickOpen}>
                <CardContent>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',  // เพิ่ม property นี้เพื่อกำหนดทิศทางเป็น column

                    }}>
                        <Box>
                            <FavoriteIcon style={{ color: check ? colors.red['A400'] : colors.grey['500'], width: '50px', height: '50px' }} />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',  // เพิ่ม property นี้เพื่อกำหนดทิศทางเป็น column

                                ml: '1rem',
                            }}
                        >
                            <Typography
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    whiteSpace: 'pre-wrap',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                }}
                                fontWeight='bold'
                                gutterBottom
                                variant='h5'
                                component='div'
                            >
                                {data.title}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'center',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <AccountCircleIcon sx={{ color: '#4ED99E' }} />
                                    <Typography variant='caption'>{data.speaker}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <AccessTimeFilledIcon sx={{ color: '#DE8887' }} />
                                    <Typography variant='caption'>
                                        {data.long_duration ? '1 ชั่วโมง' : '30 นาที'}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CategoryIcon sx={{ color: '#A62B66' }} />
                                    <Typography variant='caption'>
                                        {data.category !== '' ? data.category : 'N/A'}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
                <AlertBox content="ขณะนี้คุณได้โหวตครบจำนวน 10 ครั้งแล้ว หากต้องการเปลี่ยนหัวข้อ กรุณากดยกเลิกโหวตบางหัวข้อ" alert={alert} callbackClose={callbackClose} />
            </Card>
            <Dialog onClose={handleClose} open={open} maxWidth={dialogSize} fullWidth sx={{borderRadius: '10rem'}}>
                <div>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <DialogContent sx={{ background: '#EBEBEB' }}>
                            <Typography
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    whiteSpace: 'pre-wrap',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                    fontWeight: '700',
                                    fontSize: 32,
                                    color: '#F00',
                                    fontFamily: 'Noto Sans Thai',
                                    justifyContent: 'center',
                                }}
                                gutterBottom
                                component='div'
                            >
                                <div className='Font-title'>
                                    {data.title}
                                </div>
                            </Typography>
                            <Typography sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                whiteSpace: 'pre-wrap',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                mt: -2,
                                mb: 2,
                                fontWeight: '700',  // หรือใช้ 'bolder' ตามความต้องการ
                                fontSize: 15,
                                color: '#F00',
                                fontFamily: 'Noto Sans Thai'
                            }}
                                gutterBottom
                                component='div'
                            >
                            </Typography>
                            {data.description ? <Typography sx={{
                            borderRadius: '0.7rem', textAlign: "center", alignItems: "center", justifyItems: "center", background: "#FFF;", pt: 1, pb: 1, mb: 2,
                            fontWeight: '700',  // หรือใช้ 'bolder' ตามความต้องการ
                            fontSize: 12,
                            color: '#F00',
                            fontFamily: 'Noto Sans Thai'
                        }} elevation={4}>
                            {data.description}
                        </Typography> : null}

                            <Grid sx={{ flexGrow: 1,direction:"row" }} container spacing={2} >
                            <Grid item>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <AccountCircleIcon sx={{ color: '#4ED99E' }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography gutterBottom sx={{
                                            fontWeight: '700',  // หรือใช้ 'bolder' ตามความต้องการ
                                            fontSize: 15,
                                            color: '#F00',
                                            fontFamily: 'Noto Sans Thai'
                                        }}>
                                            {data.speaker}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <AccessTimeFilledIcon sx={{ color: '#DE8887' }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography gutterBottom sx={{
                                            fontWeight: '700',  // หรือใช้ 'bolder' ตามความต้องการ
                                            fontSize: 15,
                                            color: '#F00',
                                            fontFamily: 'Noto Sans Thai'
                                        }}>
                                            {data.long_duration ? "1 ชั่วโมง" : "30 นาที"}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <CategoryIcon sx={{ color: '#A62B66' }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography gutterBottom sx={{
                                            fontWeight: '700',  // หรือใช้ 'bolder' ตามความต้องการ
                                            fontSize: 15,
                                            color: '#F00',
                                            fontFamily: 'Noto Sans Thai'
                                        }}>
                                            {data.category !== "" ? data.category : 'N/A'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                            <CardActions direction="row" spacing={2} sx={{ mt: 1 ,justifyContent:'center'}}>
                                <Button onClick={handleClose} style={{ color: colors.grey['500'], hover:colors.red['A400'] }}>Cancel</Button>
                                <Button onClick={checker} sx={{ borderRadius: '0.7rem', backgroundColor: "#D9D9D9", color: '#FFF' }} style={{ color: check ? colors.grey['500'] : colors.red['A400'] }}>
                                    <Typography fontWeight='bold' variant='body2'>{check ? "ยกเลิกโหวต" : "โหวต"}</Typography>
                                </Button>
                            </CardActions>
                        </DialogContent>
                    </Box>
                </div>
            </Dialog>
        </div>
    );
}
