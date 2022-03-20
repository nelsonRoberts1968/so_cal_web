import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
<<<<<<<< HEAD:client/src/components/Contact/index.js
import Typography from "../Typography";
========
import Typography from '../Typography';
import { Link } from 'react-router-dom';
>>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder):client/src/components/Home/Contact.js

function Contact() {
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
                    Got any questions?
                </Typography>
            </Button>
            <Typography variant="subtitle1" sx={{ my: 3 }}>
                We are here to help. Get in touch!
            </Typography>
                <Link to="/contact">
                    <Box
                component="button"
                href="/contact"
                alt="contact-us-button"
                sx={{ width: 120 }}
            >Contact Us
            </Box>
            </Link>
        </Container>
    );
}

export default Contact;