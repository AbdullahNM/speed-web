import React from 'react';
import { Card } from 'react-bootstrap';
import image1 from '../assets/pic2.jpeg';
import image2 from '../assets/pic1.jpeg'
import '../css/ImageSlide.css';

const  ImgOverlayCard = () =>{
  const imageStyle ={
    padding: '0',

  }
  return (
    <Card className="bg-dark text-light opacity-90">
      <Card.Img src={image1} alt="Card image" className="cardimage"/>
      <Card.ImgOverlay style={{'padding':0}}>
      <Card.Img src={image2} className='cardimage2'/>
      </Card.ImgOverlay>
      
    </Card>
  );
}

export default ImgOverlayCard;
