import * as React from 'react';
import Container from '@mui/material/Container';
import AboutGroup from '../../../src/components/AboutGroup';
import Box from '@mui/material/Box';
import Paper from '../Paper';
import Typography from '../Typography';
import Button from '../Button';
import { Link } from 'react-router-dom';

function About(props) {
    const { children } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mt: 7, mb: 12 }}>
                    <Paper
                        background="light"
                        sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
                    >
                        <Typography variant="h4" marked="center" align="center" component="h2">
                            Who We Are
                        </Typography>
                        <hr />
                        <Box sx={{
                            alignItems: 'center',
                            className: 'my-2'

                        }} >
                            <p>
                                The SoCal Tanzanian Community is a group of people from Tanzania
                                living in Southern California consciously collaborating on the basis
                                of their belonging to the same country of origin.
                            </p>
<<<<<<< HEAD
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
=======
                                <Link to="/culture">
                                <Button
                                color="secondary"
                                size="large"
                                variant="contained"
                                component="a"
                                href="/culture"
                                sx={{ mt: 8 }}
                            > Learn More
                            </Button>
                        </Link>
>>>>>>> develop
                        </Box>

                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}

export default About;