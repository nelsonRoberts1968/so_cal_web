import * as React from 'react';
import Typography from '../Typography';
import HeroLayout from './HeroLayout';

export default function PageHero() {
    return (
        <HeroLayout
            sxBackground={{
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            <Typography color="inherit" align="center" variant="h2" marked="center">
                SoCal Tanzanian Community
            </Typography>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
        </HeroLayout>
    );
}