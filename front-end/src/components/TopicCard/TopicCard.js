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
import RecommendIcon from '@mui/icons-material/Recommend';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//Icon
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function TopicCard({ data, callback, index }) {
    const Recommend = "Recommend"
    const isMobile = useMediaQuery('(max-width:600px)');
    const dialogSize = isMobile ? 'sm' : 'lg';
    const [alert, setAlert] = useState(false)
    const [check, setCheck] = useState(data.status);
    const user = useContext(userContext)
    const [open, setOpen] = React.useState(false);

    // const [vote , setVote] = useState(0)
    // const [limitvote , setLimitVote] = useState(0)
    const checker = () => {
        backend.post('/voted', { user, id: data._id }).then(res => {
            if (res.data.message !== "Vote to limit.") {
                // setVote(res.data.vote_count)
                // setLimitVote(res.data.limit)
                setCheck(!check)
                callback(data)
                handleClose()
            } else {
                setAlert(true)
                handleClose()
            }
        }).catch(() => window.location.reload())

    }


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                        mb: "-12px",
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                        {data.recommend ? (
                            <>
                                <RecommendIcon
                                    sx={{
                                        position: 'absolute',
                                        right: -10,
                                        top: -10,
                                        color: '#FFD700',
                                    }}
                                />

                            </>
                        ) : null}
                        <Box >
                            <FavoriteIcon style={{ color: check ? colors.red['A400'] : colors.grey['500'], width: '50px', height: '50px' }} />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',  // เพิ่ม property นี้เพื่อกำหนดทิศทางเป็น column

                                ml: '0.5rem',
                            }}
                        >
                            <Typography
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    whiteSpace: 'pre-wrap',
                                    WebkitLineClamp: 3,
                                    mt: 0.75,
                                    lineHeight: '1.25',
                                    WebkitBoxOrient: 'vertical',
                                }}
                                fontWeight='bold'
                                fontSize='19px'
                                component='div'
                            >
                                {data.title}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'center',
                                    mt: 1,
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'center' }}>
                                    <AccountCircleIcon sx={{ color: '#4ED99E' }} />

                                    <Typography variant='caption'>{data.speaker}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'center' }}>
                                    <AccessTimeFilledIcon sx={{ color: '#DE8887' }} />
                                    <Typography variant='caption'>
                                        {data.long_duration ? '1 ชั่วโมง' : '30 นาที'}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'center' }}>
                                    <LocalOfferIcon sx={{ color: '#A62B66' }} />
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
            <Dialog
                onClose={handleClose}
                open={open}
                maxWidth={dialogSize}
                fullWidth
                sx={{
                    borderRadius: '1rem',
                }}
            >
                <div>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 2,
                            top: 2,
                            color: (theme) => theme.palette.grey[500],
                            zIndex:1
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {data.recommend ? (
                        <>
                            <RecommendIcon
                                sx={{
                                    position: 'absolute',
                                    left: 8,
                                    top: 8,
                                    color: '#FFD700',
                                    zIndex:1
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: 35,
                                    top: 9,
                                    fontSize: 15,
                                    color: '#FFD700',
                                    fontWeight: '700',
                                    fontFamily: 'Noto Sans Thai',
                                    zIndex:1

                                }}
                            >
                                {Recommend}
                            </Box>
                        </>
                    ) : null}

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <DialogContent sx={{ background: '#FFFF ' }}>
                            <Typography
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    whiteSpace: 'pre-wrap',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                    fontWeight: '700',
                                    fontSize: 24,
                                    mt: 2,
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

                                fontFamily: 'Noto Sans Thai'
                            }}
                                gutterBottom
                                component='div'
                            >
                            </Typography>
                            {data.description ? (
                                <Box
                                    sx={{
                                        borderRadius: '0.1rem',
                                        alignItems: 'left',
                                        justifyItems: 'center',
                                        background: '#EBEBEB',
                                        pt: 1,
                                        pb: 1,
                                        mb: 2,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            mx: 2,
                                            overflow: 'auto',
                                            fontSize: 16,
                                            fontFamily: 'Noto Sans Thai',
                                            maxHeight: '150px',  // กำหนดความสูงสูงสุด (ตัวอย่างเท่านั้น)
                                        }}
                                    >
                                        {data.description}
                                    </Typography>
                                </Box>
                            ) : null}

                            <Grid sx={{ flexGrow: 1, direction: "row", justifyContent: 'space-evenly' }} container spacing={1} >
                                <Grid item>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <AccountCircleIcon sx={{ color: '#4ED99E' }} />

                                        </Grid>
                                        <Grid item>
                                            <Typography gutterBottom sx={{

                                                fontSize: 15,

                                                fontFamily: 'Noto Sans Thai'
                                            }}>
                                                {data.speaker}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <AccessTimeFilledIcon sx={{ color: '#DE8887' }} />

                                        </Grid>
                                        <Grid item>
                                            <Typography gutterBottom sx={{

                                                fontSize: 15,

                                                fontFamily: 'Noto Sans Thai'
                                            }}>
                                                {data.long_duration ? "1 ชั่วโมง" : "30 นาที"}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <LocalOfferIcon sx={{ color: '#A62B66' }} />
                                        </Grid>
                                        <Grid item>
                                            <Typography gutterBottom sx={{

                                                fontSize: 15,

                                                fontFamily: 'Noto Sans Thai'
                                            }}>
                                                {data.category !== "" ? data.category : 'N/A'}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <CardActions sx={{ mt: 1, justifyContent: 'center' }}>
                                <Button onClick={checker} sx={{minHeight:"32px",minWidth:"270px", borderRadius: '0.7rem', px: "6rem", display: 'flex', alignItems: 'center', justifyContent: 'center' }} style={{ color: "white", background: check ? colors.red['A400'] : colors = "#27db5d" }}>
                                    <Typography variant='body2' sx={{ fontWeight: '700', whiteSpace: 'nowrap', marginRight: '8px', }}>{check ? "ยกเลิกโหวต" : "โหวต"}</Typography>
                                </Button>
                            </CardActions>
                        </DialogContent>
                    </Box>
                </div>
            </Dialog>
        </div>
    );
}
