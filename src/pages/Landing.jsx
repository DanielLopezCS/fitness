import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Row, Col, Button, Card, Modal } from "react-bootstrap";
import AnimatedText from "../component/AnimatedText";
import ImageCarouselModal from "../component/ImageCarousel";
("../component/ImageCarousel");
import PieChart from "../component/DemoPieChart";
import { useInView } from "react-intersection-observer";
import computerImage from "../assets/computer.jpg";
import Plans from "../component/Plans";

function BasicExample() {
  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const images = [
    "../src/assets/mealprep.png",
    "../src/assets/fitness.png",
    "../src/assets/meal.png",
    // Add more image URLs as needed
  ];
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [delay, setDelay] = useState(2000); // Initial delay in milliseconds

  return (
    <Container>
      <div>
        {/*
      <button onClick={handleShowModal}>Open Image Carousel</button>
      <ImageCarouselModal
        images={images}
        show={showModal}
        handleClose={handleCloseModal}
      />
  */}
      </div>
      <div className="landing-container">
        <Row>
          <Col xl={7} lg={1} md={1}></Col>
          <Col xl={3} lg={3} style={{ marginTop: "14%", marginLeft: "100px" }}>
            <h1
              className="d-flex h-100"
              style={{ fontSize: "66px", letterSpacing: "-3px" }}
            >
              begin <br />
              your journey
            </h1>
            <Button
              style={{
                backgroundColor: "black",
                borderColor: "black",
                color: "white",
                textAlign: "left",
                position: "absolute",
                width: "150px",
                zIndex: "9999", // Increase the z-index
              }}
              className="text-center"
              color="red"
            >
              start now
            </Button>
          </Col>
        </Row>
      </div>
      <h1
        className="text-center"
        style={{ marginTop: "15%", fontSize: "60px", letterSpacing: "-3px" }}
      >
        {" "}
        why choose us?
      </h1>

      <Row
        className="d-flex"
        style={{
          marginTop: "5%",
        }}
      >
        <Col xl={6} style={{ textAlign: "right" }}>
          <h1
            className="d-flex h-100 mt-4 d-flex justify-content-end"
            style={{
              fontSize: "80px",
              letterSpacing: "-3px",
              marginRight: "10px",
            }}
          >
            <br />
            track
            <br />
            your
            <br />
            macros
            <br />
            <br />
          </h1>
        </Col>
        <Col xl={6}>
          <PieChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <img
            src={computerImage}
            height="500px"
            className="w-100"
            style={{ borderRadius: "15px" }}
          ></img>
        </Col>
        <Col xl={4} style={{ marginTop: "50px" }}>
          <h1
            className="d-flex d-flex mt-2 justify-content-start"
            style={{ fontSize: "80px", letterSpacing: "-3px" }}
          >
            post
            <br />
            your
            <br />
            progress
            <br />
            <br />
          </h1>
        </Col>
        <Col xl={4}></Col>
      </Row>
      <br />
      <Row className="mt-4">
        <h1
          className="text-center"
          style={{ fontSize: "80px", marginTop: "10%" }}
        >
          our plans
        </h1>
        <br />
        <br />
        <div style={{ marginTop: "5%" }}></div>
        <Plans />
      </Row>
    </Container>
  );
}

export default BasicExample;
