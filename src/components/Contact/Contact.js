import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import contactImage from "../../assets/img/contact-img.svg";
import "./contact.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_0szll3w";
    const templateId = "template_1xa9gas";
    const publicKey = "p_PxKXmjAArZVYx8l";

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      message: message,
      to_name: "Taiseer",
    };

    const toastId = toast.loading("Sending message...");

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        toast.success("Message sent successfully", {
          id: toastId,
        });
      },
      (error) => {
        console.log("FAILED...", error.text);
        toast.error("Failed to send message! Please try again later.", {
          id: toastId,
        });
      },
    );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center my-4">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImage}
                  alt="ContactImage"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="tel" placeholder="Phone Number" />
                      </Col>
                      <Col className="px-1 text-center pb-2">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit">
                          <span>Send</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
