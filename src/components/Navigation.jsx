import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

let Navigation = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="dark" className="bg-body-tertiary" style={{ height: '10vh' }}>
        <Container>
          <Navbar.Brand href="/">Speed Cargo Movers</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
