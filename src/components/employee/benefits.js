import { Button,Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import '../../assets/css-components/employeecss/benefits.css'
const Benefits = () => {
  return (
    <div className='bene-fits'>
        <div className='health'>
            <Card sx={{ maxWidth: 500 }}>
            <CardMedia
            className='image-card'
                component="img"
                alt="health"
                height="200"
                image="https://png.pngtree.com/png-vector/20190328/ourlarge/pngtree-vector-health-icon-png-image_872333.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Health Benefits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                $200 pay/period
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Apply</Button>
            </CardActions>
            </Card>
            <Card sx={{ maxWidth: 500 }}>
            <CardMedia
            className='image-card'
                component="img"
                alt="retirement"
                height="190"
                image="https://cdn-icons-png.flaticon.com/512/5988/5988343.png"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Retirement Plans
                </Typography>
                <Typography variant="body2" color="text.secondary">
                $300 pay/period
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Apply</Button>
            </CardActions>
            </Card>
        </div>
    </div>
  )
}

export default Benefits