import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import image1 from "../assets/pic4.jpeg";
import { Container } from "react-bootstrap";
//import { ListGroup } from "react-bootstrap";
import TextContent from "./TextContent";
import "../css/Content.css";

let GridExample = () => {
  const list = [
    'Building trusted relationships. Through our vast network of reliable partners, we ensure businesses can focus on operations while we handle timely, safe deliveries.',
    'Customer-centric solutions. With a focus on understanding client needs, we optimize supply chains and empower businesses to adapt in a fast-paced environment.',
    'Nationwide reach. Our services stretch across India, enabling us to facilitate cargo delivery wherever our clients need to go.',
  ];
  return (
    <>
      <Container fluid style={{ padding: "6vh" }} id="content">
        <Row
          xs={1}
          md={2}
          className="g-4 flex-row d-flex justify-content-evenly"
        >
          <Col key={0}>
            <Card
              className="border-0 rounded bg-dark"
              style={{ justifyContent: "center" }}
            >
              <div className="d-flex justify-content-center">
                <div>
                  <Card.Img
                    variant="top"
                    src={image1} // Replace with your image URL or use the actual image URL
                    style={{ width: "70hh", height: "60vh", border: "none" }} // Set image dimensions
                  />
                </div>
                {/* <div className="flex-grow-1">
                
              </div> */}
              </div>
            </Card>
          </Col>

          <Col key={1}>
            <Card
              className="border-0 text-light bg-dark"
              style={{ width: "70hh", height: "60vh", paddingLeft: "10hh" }}
            >
              <div className="d-flex">
                <div></div>

                <div className="flex-grow-1 d-flex justify-content-center">
                  <Card.Body>
                    <Card.Title>
                      <h1
                        className=" w-800 d-flex justify-content-center"
                        style={{ fontSize: "xxx-large" }}
                      >
                        Who Are We!
                      </h1>
                    </Card.Title>
                    <Card.Text>
                      <TextContent list={list} />
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
          {/* <Col key={2}>
            <Card style={{ width: "70hh", height: "60vh" }}>
              <div className="d-flex text-light bg-dark">
                <div>
                  <Card.Img
                    variant="top"
                    src={image1} // Replace with your image URL or use the actual image URL
                    style={{ width: "50hh", height: "50vh" }} // Set image dimensions
                  />
                </div>
                <div className="flex-grow-1">
                  <Card.Body style={{ color: "white" }}>
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
              <div className="d-flex ">
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
          </Col> */}
        </Row>
      </Container>
      
    </>
  );
};

export default GridExample;
