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

import Home from "./components/Home";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { Container, Card } from "react-bootstrap";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  // const [isLoggedIn, setIsLoggedIn ] = useState (false);
  const [homeSelected, setHomeSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [calendarSelected, setCalendarSelected] = useState(false);
  const [cultureSelected, setCultureSelected] = useState(false);
  const [gallerySelected, setGallerySelected] = useState(false);
  const [membershipSelected, setMembershipSelected] = useState(false);

  //conditional rendering logic starts here
  return (
    <ApolloProvider client={client}>
      <div>
        <Container>
          {/* {isLoggedIn?
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
      ></CustomNav> : 
      
        <CustomNav
          homeSelected={homeSelected}
          setHomeSelected={setHomeSelected}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          cultureSelected={cultureSelected}
          setCultureSelected={setCultureSelected}
          membershipSelected={membershipSelected}
          setMembershipSelected={setMembershipSelected}
          sticky="top"
        ></CustomNav>
} */}

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
            {cultureSelected ? (
              <>
                <Culture></Culture>
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
    </ApolloProvider>
  );
}

export default App;
