import * as React from 'react';
import withRoot from '../withRoot';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Mission from '../components/Mission';
import Contact from '../components/Contact';


const Home = () => {
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

