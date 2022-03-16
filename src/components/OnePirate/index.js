import * as React from 'react';

import Contact from './modules/views/Contact';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import AppForm from './modules/views/AppForm';
import ProductCategories from './modules/views/ProductCategories';
import ProductHowItWorks from './modules/views/ProductHowItWorks';

function Index() {
    return (
        <React.Fragment>
            <AppAppBar />
            <ProductHero />
            <ProductCategories />
            <AppForm />
            <ProductHowItWorks />
            <Contact />
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Index);