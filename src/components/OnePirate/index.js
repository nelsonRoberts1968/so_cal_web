import * as React from 'react';

import Contact from './modules/views/Contact';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';

function Index() {
    return (
        <React.Fragment>
            <AppAppBar />
            <ProductHero />
            <Contact />
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Index);