import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from '@mui/system';
import "./TopicCard.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function TopicCard() {
  return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <div className ='checkbox' sx={{ }}>
                        <input type = 'checkbox'/>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
  );
}
