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


// export default App;
