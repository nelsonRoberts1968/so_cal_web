import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../Typography';

const handleSubmit = e => {
   e.preventDefault()
   const page = e.target.src
   
   function redirect (req, res) {
    res.writeHead(301, {
        Location: `/${page}`
    }).end();
    }
};


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
            <Box
                component="button"
                src="/contact"
                alt="contact-us-button"
                onSubmit={handleSubmit}
                sx={{ width: 120 }}
            > Contact Us </Box>
        </Container>
    );
}

export default Contact;