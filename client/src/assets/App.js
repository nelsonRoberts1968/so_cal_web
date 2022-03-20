import React, { useState } from "react";
import CustomNav from "../components/Nav";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Calendar from "../components/Calendar";
import Culture from "../components/Culture-History";
import Membership from "../components/Membership";
import Footer from "../components/Footer";
import OnePirate from "../components/OnePirate";

import { Container } from "react-bootstrap";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [calendarSelected, setCalendarSelected] = useState(false);
  const [cultureSelected, setCultureSelected] = useState(false);
  const [gallerySelected, setGallerySelected] = useState(false);
  const [membershipSelected, setMembershipSelected] = useState(false);

  return (
    <div>
      <OnePirate />
      <Container>
        <CustomNav
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
            <>
              <Calendar></Calendar>
            </>
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
