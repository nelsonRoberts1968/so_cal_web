import React, { useState } from "react";
import CustomNav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Calendar from "./components/Calendar";
import Culture from "./components/Culture-History";
import Membership from "./components/Membership";
import Footer from "./components/Footer";
// import Carousel from "./components/Carousel";
import Home from "./components/Home";

import { Container } from "react-bootstrap";

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
      {/* <Carousel></Carousel> */}
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
