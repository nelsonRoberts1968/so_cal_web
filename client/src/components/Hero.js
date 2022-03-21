import * as React from 'react';
<<<<<<<< HEAD:client/src/components/Hero/HomeHero.js
import Button from '../Button';
import Typography from '../Typography';
import LayoutHome from './LayoutHome';
import HeroBg from './HeroBg';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// const heroBg = require('../../assets/images/bg_timelapse.mp4')
========
import Button from './Button';
import Typography from './Typography';
import HeroLayout from './HeroLayout';
<<<<<<<< HEAD:client/src/components/Hero.js
const heroBg = require('../assets/images/bg_timelapse.mp4')
========
import { Link } from 'react-router-dom';
const heroBg = require('../../assets/images/bg_timelapse.mp4')
>>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder):client/src/components/Nav/Hero.js
>>>>>>>> develop:client/src/components/Hero.js

export default function Hero() {
    return (
        <LayoutHome
            sxBackground={{
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
<<<<<<<< HEAD:client/src/components/Hero/HomeHero.js
========
            {/* Increase the network loading priority of the background image. */}
            {/* <img
                style={{ display: 'none' }}
                src='./assets/backgrounf.jpg'
                alt="increase priority"
            /> */}
>>>>>>>> develop:client/src/components/Hero.js
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
            <Link to='/about'>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                sx={{ minWidth: 200 }}
<<<<<<<< HEAD:client/src/components/Hero/HomeHero.js

            >
                Learn More
========
                
            >
                <Link to="/membership"></Link>
                 
                Become a Member
                
>>>>>>>> develop:client/src/components/Hero.js
            </Button>
            </Link>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
            <KeyboardArrowDownIcon
                fontSize='large'
                sx={{ position: 'absolute', bottom: 32 }}
            />
        </LayoutHome>
    );
}