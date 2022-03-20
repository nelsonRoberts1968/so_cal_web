import * as React from 'react';
import Button from '../Button';
import Typography from '../Typography';
import HeroLayout from './HeroLayout';
import { Link } from 'react-router-dom';
const heroBg = require('../../assets/images/bg_timelapse.mp4')

export default function Hero() {
    return (
        <HeroLayout
            sxBackground={{
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: 'none' }}
                src='./assets/backgrounf.jpg'
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                SoCal Tanzanian Community
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
            >
                Join the community!
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                sx={{ minWidth: 200 }}
                
            >
                <Link to="/membership"></Link>
                 
                Become a Member
                
            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
        </HeroLayout>
    );
}