import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skillsBG from "../../assets/img/skills-bg.png";
import "./skills.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

  return (
    <section className="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-box">
                        <TrackVisibility>
                            {({isVisible})=> 
                            <div className={isVisible ? "animate__animated animate__heartBeat" : ""}>
                                <h2>My Skills</h2>
                                <p>You can see my skills here..</p>
                            </div>}
                        </TrackVisibility>
                        <TrackVisibility>
                            {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <div className="skill-item">
                                        <span className="skill-item-percentage">99%</span>
                                        <h5 className="skill-item-title">HTML</h5>
                                    </div>
                                    <div className="skill-item">
                                        <span className="skill-item-percentage">97%</span>
                                        <h5 className="skill-item-title">CSS</h5>
                                    </div>
                                    <div className="skill-item">
                                        <span className="skill-item-percentage">95%</span>
                                        <h5 className="skill-item-title">Bootstrap</h5>
                                    </div>
                                    <div className="skill-item">
                                        <span className="skill-item-percentage">90%</span>
                                        <h5 className="skill-item-title">JavaScript</h5>
                                    </div>
                                    <div className="skill-item">
                                        <span className="skill-item-percentage">85%</span>
                                        <h5 className="skill-item-title">React JS</h5>
                                    </div>
                                </Carousel>
                            </div>}
                        </TrackVisibility>
                        
                    </div>   
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={skillsBG} alt="Skills-bg" />
    </section>
  );
};

export default Skills;