import * as React from 'react';
import Hero from './Hero';
import NavBar from './NavBar';
import withRoot from '../../withRoot';

function Navigation () {
    return(
    <React.Fragment>
        <NavBar></NavBar>
        <Hero></Hero>
    </React.Fragment>
    )
};

export default withRoot(Navigation);
