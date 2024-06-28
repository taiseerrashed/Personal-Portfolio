import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImage from "../../assets/img/contact-img.svg";
import "./contact.css";
import 'animate.css';
import TrackVisibility from "react-on-screen";

const Contact = () => {
   
  return (
    <section className="contact">
        <Container>
            <Row className="align-items-center my-4">
                <Col size={12} md={6}>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImage} alt="ContactImage" />
                    }
                </TrackVisibility>
                </Col>
                <Col size={12} md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Get In Touch</h2>
                                <form>
                                    <Row>
                                        <Col sm={6} className="px-1">
                                            <input type="text" placeholder="First Name" />
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="text" placeholder="Last Name" />
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="email" placeholder="Email Address" />
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="tel" placeholder="Phone Number" />
                                        </Col>
                                        <Col className="px-1 text-center pb-2">
                                            <textarea rows="6" placeholder="Message" ></textarea>
                                            <button type="submit"><span>Send</span></button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Contact;
