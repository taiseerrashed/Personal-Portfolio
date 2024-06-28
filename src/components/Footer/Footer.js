import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <Col lg={12}>
                    <div className="newsletter-box">
                        <Row>
                            <Col lg={12} md={6} xl={5}>
                                <h3>subscribe to our Newsletter</h3> 
                            </Col>
                            <Col md={6} xl={7}>
                                <form >
                                    <div className="email-box">
                                        <input type="email" placeholder="Email Address"/>
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={6}>
                    <span className="footer-logo">Taiseer<span className="dot">.</span></span>
                </Col>
                <Col sm={6} size={12} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/taiseer-salah-9b0a3221a/"><FaLinkedinIn className="icon" /></a>
                        <a href="/"><FaFacebook className="icon" /></a>
                        <a href="https://github.com/taiseerrashed"><FaGithub className="icon" /></a>
                    </div>
                    <p>CopyRight 2024. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  );
};

export default Footer;