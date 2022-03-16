import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
const bg_timelapse = require('../../assets/images/bg_timelapse.mp4');

function HeroBg() {
    return(
            <video autoPlay loop muted id='videobg'>
                <source src={bg_timelapse} type='video/mp4' />
            </video>
    )
}

export default HeroBg;