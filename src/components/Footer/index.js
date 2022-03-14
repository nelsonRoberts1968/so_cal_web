import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  FacebookIcon,
  InstapaperIcon,
  EmailIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <footer>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <InstapaperIcon size={36} />
            </Nav.Link>

            <Nav.Link href="#about">
              <FacebookIcon size={36} />
            </Nav.Link>

            <Nav.Link href="#home">
              <LinkedinIcon size={36} />
            </Nav.Link>

            <Nav.Link href="#home">
              <WhatsappIcon size={36} />
            </Nav.Link>

            <Nav.Link href="#culture">
              <EmailIcon size={36} />
            </Nav.Link>
          </Nav>
          <p>© 2022 SoCal Tanzanian Community</p>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
