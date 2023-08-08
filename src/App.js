import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ImageSlide from "./components/ImageSlide";
import Content from "./components/Content.jsx"
import CarouselSlide from "./components/CarouselSlide";
import { Row, Col, Container, Image, Table } from "react-bootstrap";
import { Ratio } from "react-bootstrap";
import ContactUs from "./components/ContactUs";

let App = () => {
  return (
    <>
    <Navigation/>
      <ImageSlide/>
      <Content/>
      <ContactUs/>
    </>
  );
};

export default App;
