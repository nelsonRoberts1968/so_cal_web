import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import HeroBg from './HeroBg';

const HeroLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        height: '60vh',
        minHeight: 500,
        maxHeight: 1300,
    },
}));

const Background = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
});

function HeroLayout(props) {
    const { sxBackground, children } = props;

    return (
        <HeroLayoutRoot>
            <Container
                sx={{
                    mt: 3,
                    mb: 14,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {children}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'common.black',
                        opacity: 0.5,
                        zIndex: -1,
                    }}
                />
                <HeroBg />
                <Background sx={sxBackground} />
                <KeyboardArrowDownIcon
                    fontSize='large'
                    sx={{ position: 'absolute', bottom: 32 }}
                />
            </Container>
        </HeroLayoutRoot>
    );
}

HeroLayout.propTypes = {
    children: PropTypes.node,
    sxBackground: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default HeroLayout;