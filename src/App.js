import React, { useState } from "react";
import CustomNav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Calendar from "./components/Calendar";
import Culture from "./components/Culture-History";
import Membership from "./components/Membership";
import Footer from "./components/Footer";
import EventsForm from "./components/EventForm";
import '@fontsource/roboto';

import OnePirate from "./components/OnePirate";

import Home from "./components/Home";

import { Container, Card } from "react-bootstrap";

function App() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [calendarSelected, setCalendarSelected] = useState(false);
  const [cultureSelected, setCultureSelected] = useState(false);
  const [gallerySelected, setGallerySelected] = useState(false);
  const [membershipSelected, setMembershipSelected] = useState(false);

  return (
    <div>
      <OnePirate />
      <Container>
        <CustomNav
          homeSelected={homeSelected}
          setHomeSelected={setHomeSelected}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          calendarSelected={calendarSelected}
          setCalendarSelected={setCalendarSelected}
          cultureSelected={cultureSelected}
          setCultureSelected={setCultureSelected}
          gallerySelected={gallerySelected}
          setGallerySelected={setGallerySelected}
          membershipSelected={membershipSelected}
          setMembershipSelected={setMembershipSelected}
          sticky="top"
        ></CustomNav>
      </Container>

      <main>
        <Container>
          {homeSelected ? (
            <>
              <Home></Home>
            </>
          ) : (
            <></>
          )}
          {aboutSelected ? (
            <>
              <About></About>
            </>
          ) : (
            <></>
          )}
          {cultureSelected ? (
            <>
              <Culture></Culture>
            </>
          ) : (
            <></>
          )}
          {calendarSelected ? (
            <div className="events-page">
              <Card>
                <Calendar></Calendar>
              </Card>
              <Card>
                <EventsForm />
              </Card>
            </div>
          ) : (
            <></>
          )}

          {gallerySelected ? (
            <>
              <Gallery></Gallery>
            </>
          ) : (
            <></>
          )}
          {membershipSelected ? (
            <>
              <Membership></Membership>
            </>
          ) : (
            <></>
          )}
          {contactSelected ? (
            <>
              <Contact></Contact>
            </>
          ) : (
            <></>
          )}
        </Container>
      </main>
      <footer>
        <Container>
          <Footer></Footer>
        </Container>
      </footer>
    </div>
  );
}

export default App;
