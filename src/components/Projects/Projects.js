import { useEffect } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import "./projects.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

  return (
    <section className="projects">
        <Container>
            <Row>
                <Col>
                    <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__heartBeat" : ""}>
                                <h2>My Projects</h2>
                                <p>We can see my Projects here..</p>
                            </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="text-light first">1st section</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="text-light">2nd section</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" className="text-light">3rd section</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TrackVisibility>
                        {({isVisible}) => 
                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInDown" : ""}>
                                <Tab.Pane eventKey="first">
                                    <Section1/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Section2/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Section3/>
                                </Tab.Pane>
                            </Tab.Content>}
                        </TrackVisibility>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Projects;
