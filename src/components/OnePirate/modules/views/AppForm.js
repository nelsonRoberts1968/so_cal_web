import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '../components/Paper';
import Typography from '../components/Typography';

function AppForm(props) {
    const { children } = props;
    return (
        <Box
            sx={{
                display: 'flex',
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
                        <div className="my-2">
                            <p>
                                The SoCal Tanzanian Community is a group of people from Tanzania
                                living in Southern California consciously collaborating on the basis
                                of their belonging to the same country of origin.
                            </p>
                        </div>

                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}

export default AppForm;