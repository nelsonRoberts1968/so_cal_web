import * as React from 'react';
import Contact from './Contact';
import withRoot from '../../withRoot';
import About from './About';
import Gallery from './Gallery';
import Mission from './Mission';

function Home() {
  return (
    <React.Fragment>
      <Gallery />
      <About />
      <Mission />
      <Contact />
    </React.Fragment>
  );
}

export default withRoot(Home);