import * as React from 'react';
const bg_timelapse = require('../../assets/images/bg_timelapse.mp4');

function HeroBg() {
    return(
            <video autoPlay loop muted id='videobg'>
                <source src={bg_timelapse} type='video/mp4' />
            </video>
    )
}

export default HeroBg;