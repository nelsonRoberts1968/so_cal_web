import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function CustomNav(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  const {
    homeSelected,
    setHomeSelected,
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
    setHomeSelected(false);
    setContactSelected(false);
    setCalendarSelected(false);
    setAboutSelected(false);
    setCultureSelected(false);
    setGallerySelected(false);
    setMembershipSelected(false);

    if (target === 0) {
      setHomeSelected(true);
    }
    if (target === 1) {
      setAboutSelected(true);
    }
    if (target === 2) {
      setCultureSelected(true);
    }
    if (target === 3) {
      setCalendarSelected(true);
    }
    if (target === 4) {
      setGallerySelected(true);
    }
    if (target === 5) {
      setMembershipSelected(true);
    }
    if (target === 6) {
      setContactSelected(true);
    }
  }

  return (
    <>
      <header>
        <Navbar className="navBar">
          <Container>
            <Navbar.Brand href="#home">
              <div className="group-logo">
                <img
                  alt=""
                  src="https://github.com/nelsonRoberts1968/so_cal_web/blob/feature/about/src/assets/images/GroupLogo.jpeg?raw=true"
                  width="150"
                  height="150"
                  className="cover-img"
                />{" "}
              </div>
            </Navbar.Brand>

            <Navbar.Collapse>
              <Nav className="me-auto">
                {homeSelected ? (
                  <>
                    <Nav.Link id="nav-selected">Home</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link onClick={() => handleClick(0)}> Home </Nav.Link>
                  </>
                )}
                |
                {aboutSelected ? (
                  <>
                    <Nav.Link id="nav-selected">About</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link onClick={() => handleClick(1)}> About </Nav.Link>
                  </>
                )}
                |
                {cultureSelected ? (
                  <>
                    <Nav.Link id="nav-selected">Culture</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link onClick={() => handleClick(2)}>
                      {" "}
                      Culture{" "}
                    </Nav.Link>
                  </>
                )}
                |
                {calendarSelected ? (
                  <>
                    <Nav.Link id="nav-selected">Calendar</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link onClick={() => handleClick(3)}>
                      {" "}
                      Calendar{" "}
                    </Nav.Link>
                  </>
                )}
                |
                {gallerySelected ? (
                  <>
                    <Nav.Link id="nav-selected">Gallery</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link onClick={() => handleClick(4)}>
                      {" "}
                      Gallery{" "}
                    </Nav.Link>
                  </>
                )}
                |
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
                |
                {contactSelected ? (
                  <>
                    <Nav.Link id="nav-selected">Contact</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link onClick={() => handleClick(6)}>
                      {" "}
                      Contact{" "}
                    </Nav.Link>
                  </>
                )}
                {/* <button onClick={toggleNav} className="h-menu">
       Menu
     </button> */}
              </Nav>
            </Navbar.Collapse>
            <hr />
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default CustomNav;
