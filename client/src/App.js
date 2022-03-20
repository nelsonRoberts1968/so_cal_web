<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ThemeProvider } from '@material-ui/core/styles'


import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import Culture from './pages/Culture'
import About from './components/About';
import themes from './theme';

const theme = themes;
=======
//Thisused to be the default root folder.That is nor replaced by index.js file
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
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


import Home from "./components/Home";

import { Container, Card } from "react-bootstrap";
>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder)

const httpLink = createHttpLink({
  uri: '/graphql',
});

<<<<<<< HEAD
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
=======
const client = new ApolloClient({
  link: httpLink,
>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder)
  cache: new InMemoryCache(),
});

function App() {
<<<<<<< HEAD
  return (
    <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/membership" component={Membership} />
              <Route exact path="/culture" component={Culture} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={ContactUs} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
=======

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
=======
// //Thisused to be the default root folder.That is nor replaced by index.js file
// import React, { useState } from "react";
// import CustomNav from "./components/Nav";
// import About from "./components/About";
// import Gallery from "./components/Gallery";
// import Contact from "./components/Contact";
// import Landing from './pages/Landing'
// import Culture from "./components/Culture-History";
// import Membership from "./components/Membership";
// import Footer from "./components/Footer";
// import Events from './components/Events'
// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// import { Container, Card } from "react-bootstrap";

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

// function App() {

//   // const [isLoggedIn, setIsLoggedIn ] = useState (false);
//   const [homeSelected, setHomeSelected] = useState(true);
//   const [contactSelected, setContactSelected] = useState(false);
//   const [aboutSelected, setAboutSelected] = useState(false);
//   const [calendarSelected, setCalendarSelected] = useState(false);
//   const [cultureSelected, setCultureSelected] = useState(false);
//   const [gallerySelected, setGallerySelected] = useState(false);
//   const [membershipSelected, setMembershipSelected] = useState(false);


//   //conditional rendering logic starts here
//   return (f
//     <div>
//       <Container>
//         {/* {isLoggedIn?
//         <CustomNav
//         homeSelected={homeSelected}
//         setHomeSelected={setHomeSelected}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//         aboutSelected={aboutSelected}
//         setAboutSelected={setAboutSelected}
//         calendarSelected={calendarSelected}
//         setCalendarSelected={setCalendarSelected}
//         cultureSelected={cultureSelected}
//         setCultureSelected={setCultureSelected}
//         gallerySelected={gallerySelected}
//         setGallerySelected={setGallerySelected}
//         membershipSelected={membershipSelected}
//         setMembershipSelected={setMembershipSelected}
//         sticky="top"
//       ></CustomNav> : 
>>>>>>> 6a5311d (fixed links on nav and in routes)
      
//         <CustomNav
//           homeSelected={homeSelected}
//           setHomeSelected={setHomeSelected}
//           contactSelected={contactSelected}
//           setContactSelected={setContactSelected}
//           aboutSelected={aboutSelected}
//           setAboutSelected={setAboutSelected}
//           cultureSelected={cultureSelected}
//           setCultureSelected={setCultureSelected}
//           membershipSelected={membershipSelected}
//           setMembershipSelected={setMembershipSelected}
//           sticky="top"
//         ></CustomNav>
// } */}

// <CustomNav
//         homeSelected={homeSelected}
//         setHomeSelected={setHomeSelected}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//         aboutSelected={aboutSelected}
//         setAboutSelected={setAboutSelected}
//         calendarSelected={calendarSelected}
//         setCalendarSelected={setCalendarSelected}
//         cultureSelected={cultureSelected}
//         setCultureSelected={setCultureSelected}
//         gallerySelected={gallerySelected}
//         setGallerySelected={setGallerySelected}
//         membershipSelected={membershipSelected}
//         setMembershipSelected={setMembershipSelected}
//         sticky="top"
//       ></CustomNav>
//       </Container>

//       <main>
//         <Container>
//           {homeSelected ? (
//             <>
//               <Landing />
//             </>
//           ) : (
//             <></>
//           )}
//           {cultureSelected ? (
//             <>
//               <Culture></Culture>
//             </>
//           ) : (
//             <></>
//           )}
//           {aboutSelected ? (
//             <>
//               <About></About>
//             </>
//           ) : (
//             <></>
//           )}
//           {calendarSelected ? (
//             <>
//               <Events />
//             </>
//           ) : (
//             <></>
//           )}

//           {gallerySelected ? (
//             <>
//               <Gallery></Gallery>
//             </>
//           ) : (
//             <></>
//           )}
//           {membershipSelected ? (
//             <>
//               <Membership></Membership>
//             </>
//           ) : (
//             <></>
//           )}
//           {contactSelected ? (
//             <>
//               <Contact></Contact>
//             </>
//           ) : (
//             <></>
//           )}
          
//         </Container>
//       </main>
//       <footer>
//         <Container>
//           <Footer></Footer>
//         </Container>
//       </footer>
//     </div>
//   );
  
// }


<<<<<<< HEAD
export default App;
>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder)
=======
// export default App;
>>>>>>> 6a5311d (fixed links on nav and in routes)
