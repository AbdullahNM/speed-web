import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/ContactUs.css'; // Import your custom CSS for styling
import image from '../assets/Speed_Cargo_Movers-removebg-preview.png'
const ContactUs = () => {
  return (
    <footer className="footer" id="contact">
      <Container>
        <Row>
        <Col md={6} className="footer-contact">
            <h4>Contact Us</h4>
            <p>Off no 48, 4th floor,gaya bldg,yusif mehrali road, masjid {`(w)`} - 400 003</p>
            <Button variant='outline-light'>
              <strong>Phone:</strong> <a href="tel:+919323837198" style={{textDecoration:'none',color:'#f04802'}}>+91 9323837198</a>
            </Button>
            <Button variant='outline-light'>
              <strong>Email:</strong> <a href='mailto:speed_c_m@hotmail.com' style={{color:'#f04802'}}>speed_c_m@hotmail.com</a>
            </Button>
          </Col>
          
          <Col md={6} className="footer-logo">
            <img
              src={image} // Replace with your logo path
              alt="Logo"
              className="logo-img"
            />
            <Row>
          <Col>
            <p className="text-center">
              &copy; 2023 Speed Cargo Movers. All rights reserved.
            </p>
          </Col>
        </Row>
          </Col>
          
        </Row>
        
      </Container>
    </footer>
  );
}

export default ContactUs;
