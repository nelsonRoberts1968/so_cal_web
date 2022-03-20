import React from 'react';
import { useState } from 'react';
import PageHero from './PageHero';
import HomeHero from './HomeHero';
import withRoot from '../../withRoot';
import HeroBg from './HeroBg';

function Hero(props) {
return(
  <HomeHero />
    )
}

export default withRoot(Hero);