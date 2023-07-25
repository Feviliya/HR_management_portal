import { Typography } from '@mui/material'
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
                <Typography size="small">Health planning is a complex process with at least three distinctive features (health being a labor-intensive sector, complex relationships between different actors, and the balance between clinical and public health perspectives). </Typography>
            </CardActions>
            </Card>
            <Card sx={{ maxWidth: 500 }}>
            <CardMedia
            className='image-card'
                component="img"
                alt="retirement"
                height="190"
                image="https://png.pngtree.com/element_our/png_detail/20181227/pension-vector-icon-png_286782.jpg"
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
                <Typography size="small">A retirement plan helps you build financial discipline to secure your future. An annuity plan and pension policy helps you build a corpus for a comfortable and financially secure retirement. A pension plan provides an avenue to safely invest your savings and grow your money for the future. </Typography>
            </CardActions>
            </Card>
        </div>
    </div>
  )
}

export default Benefits