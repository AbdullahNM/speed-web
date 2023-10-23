import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import image1 from "../assets/pic4.jpeg";
import { Container, Image } from "react-bootstrap";
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
            <Image fluid rounded
              className="border-0 rounded d-flex justify-content-center"
              src={image1}
            >
            </Image>
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
          </Row>
      </Container>
      
    </>
  );
};




export default GridExample;
