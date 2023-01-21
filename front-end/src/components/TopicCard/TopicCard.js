import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from '@mui/material'

export default function TopicCard({data}) {

    const [check, setCheck] = React.useState(false);

    const checker = () => {
        setCheck(!check)
    }

  return (
            <Card sx={{ borderRadius:'1rem'}} elevation='4'>
                <CardActionArea onClick={checker}>
                    <CardContent sx={{ display:'flex', alignItems:'center'}}>
                        <IconButton>
                            {check ? <CheckCircleIcon color='secondary' sx={{ fontSize: '2.5rem'}}/> : <CircleIcon sx={{ fontSize: '2.5rem'}}/>}
                        </IconButton>
                        <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', width: '100%'}}>
                            <Typography >
                                {data.name}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
  );
}
