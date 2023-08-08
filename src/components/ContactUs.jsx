import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/ContactUs.css'

let ContactUs = ()=> {
  return (
    <section className="contact-us-section">
      <Container>
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Address: 123 Street, City, Country</p>
          <p>Mobile: +1 (123) 456-7890</p>
          <p>Email: example@example.com</p>
        </div>
      </Container>
    </section>
  );
}

export default ContactUs;
