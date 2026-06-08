import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import ProfileImage from "../../assets/img/profile.png";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <div className="about-image">
                    <img src={ProfileImage} alt="Taiseer Salah" />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col lg={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInRight" : ""
                  }
                >
                  <span className="about-tag">About Me</span>

                  <h2>Front-End Developer</h2>

                  <p>
                    I'm a Front-End Developer passionate
                    about building modern, responsive and user-friendly
                    web applications.
                  </p>

                  <p>
                    I specialize in React.js, Next.js, TypeScript,
                    Tailwind CSS, Redux Toolkit, Zustand and React Query.
                    I enjoy turning designs into fast and interactive
                    web experiences.
                  </p>

                  <p>
                    My goal is to continuously improve my skills and contribute
                    to impactful products while learning from experienced teams.
                  </p>

                  <div className="stats">
                    <div className="stat-card">
                      <h3>1+</h3>
                      <span>Years Experience</span>
                    </div>

                    <div className="stat-card">
                      <h3>6+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </div>

                  <div className="tech-stack">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                    <SiNextdotjs />
                    <SiTypescript />
                    <SiTailwindcss />
                    <SiRedux />
                    <FaGitAlt />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
