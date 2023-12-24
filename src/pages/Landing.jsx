import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Row, Col, Card, Modal, Button } from "react-bootstrap";
import AnimatedText from "../component/AnimatedText";
import ImageCarouselModal from "../component/ImageCarousel";
("../component/ImageCarousel");
import PieChart from "../component/DemoPieChart";
import { useInView } from "react-intersection-observer";
import computerImage from "../assets/computer.jpg";
import Plans from "../component/Plans";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import useScreenSize from "../Utility";

function BasicExample() {
  const [showModal, setShowModal] = useState(false);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect on mount
    setFadeIn(true);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { isSmallScreen, isMediumScreen, isLargeScreen } = useScreenSize();

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
  useEffect(() => {
    // Trigger fade-in effect on mount
    setFadeIn(true);
  }, []);

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
        <Row className="h-100">
          <Row>
            <Col
              xl={11}
              lg={12}
              md={12}
              xs={12}
              sm={12}
              className={`d-flex ${
                !isLargeScreen
                  ? "text-center justify-content-center align-items-start mt-4"
                  : "justify-content-end align-items-end" // Add text-center class for small screens
              }`}
            >
              <h1
                style={{
                  fontSize: "66px",
                  letterSpacing: "-3px",
                  opacity: fadeIn ? 1 : 0, // Set opacity based on fade-in state
                  transition: "opacity 2s ease-in-out", // Apply transition effect
                }}
              >
                begin <br />
                your journey
                <br />
                <Row>
                  <Col
                    className={
                      !isLargeScreen
                        ? "d-flex justify-content-center"
                        : "d-flex justify-content-start"
                    }
                  >
                    <Button variant="dark" className="mt-2">
                      start now
                    </Button>
                  </Col>
                </Row>
              </h1>
            </Col>
          </Row>
          <Row></Row>
        </Row>
      </div>
      <h1
        className="text-center"
        style={{ marginTop: "10%", fontSize: "74px", letterSpacing: "-3px" }}
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
        <Col xl={6} lg={4} style={{ textAlign: "right" }}>
          <h1
            className={`d-flex h-100 mt-2 ${
              !isLargeScreen
                ? `justify-content-center text-center`
                : `justify-content-end`
            }`}
            style={{
              fontSize: "74px",
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
        <Col xl={2} lg={4}>
          <PieChart />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col
          xl={6}
          lg={6}
          sm={12}
          xs={12}
          md={12}
          className="order-xl-1 order-lg-2 order-md-2 order-sm-2 order-2"
        >
          <img
            src={computerImage}
            height="500px"
            className="w-100"
            style={{ borderRadius: "15px" }}
          ></img>
        </Col>
        <Col
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className={`order-xl-1 order-xs-1 order-sm-1 order-1`}
        >
          <h1
            className={`d-flex h-100 mt-5 ${
              !isLargeScreen
                ? `justify-content-center text-center`
                : `justify-content-start`
            }`}
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
