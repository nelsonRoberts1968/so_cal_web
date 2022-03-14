import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse>
            <Nav id="footer-nav">
              <Nav.Link
                href="https://instagram.com/socal_tanzanian_community?igshid=1gqnfxb59dvh3"
                target="_blank"
              >
                {" "}
                Instagram{" "}
              </Nav.Link>
              <Nav.Link
                href="https://www.facebook.com/groups/963510197456249/?ref=share "
                target="_blank"
              >
                {" "}
                Facebook{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
