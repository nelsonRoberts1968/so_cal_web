import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../Typography';
import { Link } from 'react-router-dom';

function ContactHero() {
    return (
        <Container
            component="section"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
        >
            <Button
                sx={{
                    border: '4px solid currentColor',
                    borderRadius: 0,
                    height: 'auto',
                    py: 2,
                    px: 5,
                }}
                
            >
                <Typography variant="h4" component="span">
                    Got any questions? Need help?
                </Typography>
                <Link to="/contact"></Link>
            </Button>
            <Typography variant="subtitle1" sx={{ my: 3 }}>
                We are here to help. Get in touch!
            </Typography>
        </Container>
    );
}

export default ContactHero;