import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../assets/Speed_Cargo_Movers__1_-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
  return (
    <Navbar bg="light" data-bs-theme="dark" expand="lg" variant="light" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Speed Cargo Movers"
            className="menu-icon"
            style={{ maxWidth: '100%', maxHeight: '100%', width: '50px', height: '50px' }}
          />
          <span className="ml-2">Speed Cargo Movers</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
