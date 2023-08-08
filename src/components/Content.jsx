import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import image1 from "../assets/pic4.jpeg";
import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import '../css/Content.css'

let GridExample = () => {
  return (
    <>
      <Container fluid style={{ padding: "6vh" }}>
        <Row
          xs={1}
          md={2}
          className="g-4 flex-row d-flex justify-content-evenly"
        >
          <Col key={0}>
            <Card className="border-0" style={{ justifyContent: "center" }}>
              <div className="d-flex justify-content-center">
                <div>
                  <Card.Img
                    variant="top"
                    src={image1} // Replace with your image URL or use the actual image URL
                    style={{ width: "70hh", height: "60vh" }} // Set image dimensions
                  />
                </div>
                {/* <div className="flex-grow-1">
                
              </div> */}
              </div>
            </Card>
          </Col>

          <Col key={1}>
            <Card
              className="border-0"
              style={{ width: "70hh", height: "60vh", paddingLeft: "10hh" }}
            >
              <div className="d-flex">
                <div></div>

                <div className="flex-grow-1 d-flex justify-content-center">
                  <Card.Body>
                    <Card.Title>
                      <h1 className=" w-800 d-flex justify-content-center" style={{fontSize: 'xxx-large'}}>
                        Who Are We!
                      </h1>
                    </Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
          <Col key={2}>
            <Card style={{ width: "70hh", height: "60vh" }}>
              <div className="d-flex">
                <div>
                  <Card.Img
                    variant="top"
                    src={image1} // Replace with your image URL or use the actual image URL
                    style={{ width: "50hh", height: "50vh" }} // Set image dimensions
                  />
                </div>
                <div className="flex-grow-1">
                  <Card.Body>
                    <Card.Title style={{ justifyContent: "center" }}>
                      Who Are we
                    </Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
          <Col key={3}>
            <Card style={{ width: "70hh", height: "60vh" }}>
              <div className="d-flex">
                <div>
                  <Card.Img
                    variant="top"
                    src={image1} // Replace with your image URL or use the actual image URL
                    style={{ width: "50hh", height: "50vh" }} // Set image dimensions
                  />
                </div>
                <div className="flex-grow-1">
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <div class="container-fluid pt-5">
        <div class="container">
          <div class="text-center pb-2">
            <h6 class="text-primary text-uppercase font-weight-bold">
              Our Services
            </h6>
            <h1 class="mb-4">Best Logistic Services</h1>
          </div>
          <div class="row pb-3">
            <div class="col-lg-3 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x fa-plane text-dark pr-3"></i>
                <h6 class="text-white font-weight-medium m-0">Air Freight</h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a class="border-bottom text-decoration-none" href="#home">
                Read More
              </a>
            </div>
            <div class="col-lg-3 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x fa-ship text-dark pr-3"></i>
                <h6 class="text-white font-weight-medium m-0">Ocean Freight</h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a class="border-bottom text-decoration-none" href="#home">
                Read More
              </a>
            </div>
            <div class="col-lg-3 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x fa-truck text-dark pr-3"></i>
                <h6 class="text-white font-weight-medium m-0">
                  Land Transport
                </h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a class="border-bottom text-decoration-none" href="#home">
                Read More
              </a>
            </div>
            <div class="col-lg-3 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x fa-store text-dark pr-3"></i>
                <h6 class="text-white font-weight-medium m-0">Cargo Storage</h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a class="border-bottom text-decoration-none" href="#home">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridExample;
