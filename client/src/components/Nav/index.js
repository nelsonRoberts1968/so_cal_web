import * as React from 'react';
import NavBar from './NavBar';
import withRoot from '../../withRoot';

function Navigation () {
    return(
    <React.Fragment>
        <NavBar></NavBar>
    </React.Fragment>
    )
};

export default withRoot(Navigation);
