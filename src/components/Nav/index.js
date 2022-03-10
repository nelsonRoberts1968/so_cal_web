import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function CustomNav(props) {
  const {
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
    calendarSelected,
    setCalendarSelected,
    cultureSelected,
    setCultureSelected,
    gallerySelected,
    setGallerySelected,
    membershipSelected,
    setMembershipSelected,
  } = props;

  function handleClick(target) {
    setContactSelected(false);
    setCalendarSelected(false);
    setAboutSelected(false);
    setCultureSelected(false);
    setGallerySelected(false);
    setMembershipSelected(false);

    if (target === 0) {
      setContactSelected(true);
    }
    if (target === 1) {
      setAboutSelected(true);
    }
    if (target === 2) {
      setCalendarSelected(true);
    }
    if (target === 3) {
      setCultureSelected(true);
    }
    if (target === 4) {
      setGallerySelected(true);
    }
    if (target === 5) {
      setMembershipSelected(true);
    }
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <div>
              <img
                alt=""
                src="https://github.com/nelsonRoberts1968/so_cal_web/blob/feature/about/src/assets/images/GroupLogo.jpeg?raw=true"
                width="100"
                height="100"
                className="d-inline-block align-top"
              />{" "}
              <h1> SoCal Tanzanian Community </h1>
            </div>
          </Navbar.Brand>
          {/* <Navbar.Brand href="/">SoCal Tanzanian Community</Navbar.Brand> */}
          <Navbar.Collapse>
            <Nav className="me-auto">
              {aboutSelected ? (
                <>
                  <Nav.Link id="nav-selected">About</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(1)}> About </Nav.Link>
                </>
              )}
              {cultureSelected ? (
                <>
                  <Nav.Link id="nav-selected">Culture</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(3)}> Culture </Nav.Link>
                </>
              )}
              {calendarSelected ? (
                <>
                  <Nav.Link id="nav-selected">Calendar</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(2)}> Calendar </Nav.Link>
                </>
              )}

              {gallerySelected ? (
                <>
                  <Nav.Link id="nav-selected">Gallery</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(4)}> Gallery </Nav.Link>
                </>
              )}
              {membershipSelected ? (
                <>
                  <Nav.Link id="nav-selected">Membership</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(5)}>
                    {" "}
                    Membership{" "}
                  </Nav.Link>
                </>
              )}
              {contactSelected ? (
                <>
                  <Nav.Link id="nav-selected">Contact</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(0)}> Contact </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default CustomNav;
