import * as React from 'react';
import Button from '../Button';
import Typography from '../Typography';
import HeroLayout from '../Nav/HeroLayout';
import { Link } from 'react-router-dom';

export default function LearnMore() {
    return (
        <HeroLayout
            sxBackground={{
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >

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

                About Us

            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
        </HeroLayout>

    )
}