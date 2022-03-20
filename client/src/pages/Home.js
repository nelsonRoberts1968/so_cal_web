<<<<<<< HEAD
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

=======
import React from "react";
import EventList from "../components/Events/EventsList";
import EventForm from "../components/Events/EventForm";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
// Add QUERY_ME_BASIC below if needed
import { QUERY_EVENTS } from "../utils/queries";

const Home = () => {
  //Loading property is going to be used to conditionally render the pages 
  const { loading, data } = useQuery(QUERY_EVENTS);
  //   const { data: userData } = useQuery(QUERY_ME_BASIC);
  const events = data?.events || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <EventForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EventList thoughts={events} title="Some upcoming events..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder)
