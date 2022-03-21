import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
<<<<<<<< HEAD:client/src/components/Home/Gallery.js
import Typography from '../Typography';
import { Link } from 'react-router-dom';
========
import Typography from './Typography';
>>>>>>>> develop:client/src/components/Gallery.js

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const images = [
    {
        title: "group-lunch",
        url: "https://github.com/nelsonRoberts1968/so_cal_web/blob/main/src/assets/images/Event.jpeg?raw=true",
        width: "40%",
    },
    {
        title: "tanzanian",
        url: "https://github.com/nelsonRoberts1968/so_cal_web/blob/main/src/assets/images/Event10.jpeg?raw=true",
        width: "20%",
    },
    {
        title: "group-meeting",
        url: "https://github.com/nelsonRoberts1968/so_cal_web/blob/main/src/assets/images/Event1.jpeg?raw=true",
        width: "40%",
    },
    {
        title: "women-lunch",
        url: "https://github.com/nelsonRoberts1968/so_cal_web/blob/main/src/assets/images/Event5.jpeg?raw=true",
        width: "38%",
    },
    {
        title: "party",
        url: "https://github.com/nelsonRoberts1968/so_cal_web/blob/main/src/assets/images/Event6.jpeg?raw=true",
        width: "38%",
    },
    {
        title: "group-drinks",
        url: "https://github.com/nelsonRoberts1968/so_cal_web/blob/main/src/assets/images/Event7.jpeg?raw=true",
        width: "24%",
    },

    {
        title: "women-dresses",
        url: "https://github.com/nelsonRoberts1968/so_cal_web/blob/main/src/assets/images/Event8.jpeg?raw=true",
        width: "40%",
    },
    {
        title: "tanzanian-women",
        url: "https://github.com/nelsonRoberts1968/so_cal_web/blob/main/src/assets/images/WomenOfGroup2.jpeg?raw=true",
        width: "20%",
    },
    {
        title: "women",
        url: "https://github.com/nelsonRoberts1968/so_cal_web/blob/main/src/assets/images/Event9.jpeg?raw=true",
        width: "40%",
    }
];


export default function Gallery() {
    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Link 
            to='/events'>
            <Typography variant="h4" marked="center" align="center" component="h2">
                Our Events
            </Typography>
            </Link>
            <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image) => (
                    <ImageIconButton
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 40%',
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <ImageBackdrop className="imageBackdrop" />
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'common.white',
                            }}
                        >
<<<<<<<< HEAD:client/src/components/Home/Gallery.js
========
                            {/* <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                className="imageTitle"
                            >
                                // {image.title}
                                <div className="imageMarked" /> */}
                            {/* </Typography> */}
>>>>>>>> develop:client/src/components/Gallery.js
                        </Box>
                    </ImageIconButton>
                ))}
            </Box>
        </Container>
    );
}