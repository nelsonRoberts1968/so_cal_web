import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../Button';
import Typography from '../Typography';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const number = {
    fontSize: 24,
    fontFamily: 'default',
    color: 'secondary.main',
    fontWeight: 'medium',
};

const image = {
    height: 55,
    my: 4,
};

function Mission() {
    return (
        <Box
            component="section"
            sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
        >
            <Container
                sx={{
                    mt: 10,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    src="./assets/backgrounf.jpg"
                    alt="curvy lines"
                    sx={{
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: -180,
                        opacity: 0.7,
                    }}
                />
                <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
                    Our Mission and Vision
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>Mission</Box>
                                <Typography variant="h5" align="center">
                                    We envision the SoCal Tanzanian community as a go-to resource, strategic
                                    friendship, and thought leader guiding and organizing social
                                    entrepreneurs, innovators, investors, and leaders in their ambitions to create positive change for the community.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>Vision</Box>
                            
                                <Typography variant="h5" align="center">
                                    Actualize the full potential of Tanzanians from Southern California and beyond, activating
                                    their entrepreneurial spirit, and strategically mobilizing financial
                                    and intellectual resources to ensure a brighter future for the
                                    community.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>Plan</Box>
                         <Typography variant="h5" align="center">
                                    Re-engineer the community to satisfy the critical needs of its members and lay a solid foundation for future policies through the three cardinal agendas: Production, Empowerment, and Development.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <Button
                    color="secondary"
                    size="large"
                    variant="contained"
                    component="a"
                    href="/membership/"
                    sx={{ mt: 8 }}
                >
                    Get Involved
                </Button>
            </Container>
        </Box>
    );
}

export default Mission;