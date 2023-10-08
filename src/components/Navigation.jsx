import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from '../assets/Speed_Cargo_Movers__1_-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let Navigation = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="dark" className="bg-body-tertiary" style={{ height: '10vh' }}>
        <Container>
          <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Speed Cargo Movers"
              className="menu-icon"
              style={{ maxWidth: '100%', maxHeight: '100%' ,width: '10vh',height: '10vh'}} // Add this style
            />
            Speed Cargo Movers
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#content">About Us</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
