import React from 'react';
import PageHero from './PageHero';
import HomeHero from './HomeHero';
import withRoot from '../../withRoot';

function Hero(props) {
return(
  <HomeHero />
    )
}

export default withRoot(Hero);