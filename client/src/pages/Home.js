import * as React from 'react';
import Gallery from '../components/Gallery.js';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Mission from '../components/Mission';
import AppBar from '../components/AppBar';
import withRoot from '../withRoot';
import { ThemeProvider } from '@mui/material/styles';
const theme = require('../theme')

function Home() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <AppBar />
      <Hero />
      <About />
      <Gallery />
      <Mission />
      <Contact />
      <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default withRoot(Home);

