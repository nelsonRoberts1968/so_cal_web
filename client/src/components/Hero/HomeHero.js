import * as React from 'react';
import Button from '../Button';
import Typography from '../Typography';
import LayoutHome from './LayoutHome';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Hero() {
    return (
        <LayoutHome
            sxBackground={{
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
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

            >
                Learn More
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