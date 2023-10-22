import React from 'react';
import {Container, Row } from 'react-bootstrap';
import CustomBadge from './CustomBadge';

const Services = () => {
  const textStyle = {
    fontSize: '1 rem',
    fontWeight: 'bold',
    textWrap: 'wrap',
    color: '#f04802',
    content: 'left',
    padding: '5vh 0',
    width: '100%',
    height: '100%', 
    boxSizing: 'border-box'
  }

  const listcontent = ['Best frieght Charges','24/7 Support','Pan India Services','All load sizes']
  return (
    <div className="container-fluid pt-5">
      <Container>
        <div className="text-center pb-2">
          <h5 className="text-uppercase font-weight-bold" style={textStyle}>
            What do we deliver
          </h5>
        </div>
        <Row className="pb-3">
        {listcontent.map((item, index) => {
            return (
              <CustomBadge text={item} />
            );
        })}
        </Row>
      </Container>
    </div>
  );
}

export default Services;
