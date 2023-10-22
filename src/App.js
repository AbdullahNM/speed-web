import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ImageSlide from "./components/ImageSlide";
import Content from "./components/Content.jsx"
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";

let App = () => {
  return (
    <>
    <div className="bg-dark">
    <Navigation/>
      <ImageSlide/>
      <Content/>
      <Services/>
      <ContactUs/>
      </div>
    </>
  );
};

export default App;
