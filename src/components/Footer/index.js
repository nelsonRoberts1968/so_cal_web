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
            <Nav.Link href="https://instagram.com/socal_tanzanian_community?igshid=1gqnfxb59dvh3">
              <InstapaperIcon size={36} />
            </Nav.Link>

            <Nav.Link href="https://m.facebook.com/groups/963510197456249?group_view_referrer=profile_browser">
              <FacebookIcon size={36} />
            </Nav.Link>

            <Nav.Link href="#home">
              <LinkedinIcon size={36} />
            </Nav.Link>

            <Nav.Link href="https://chat.whatsapp.com/IDPdLOsAEpL4a5k9ORk3AE">
              <WhatsappIcon size={36} />
            </Nav.Link>

            <Nav.Link href="#contact">
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
