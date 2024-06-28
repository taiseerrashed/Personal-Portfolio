import { Col, Container, Row } from 'react-bootstrap';
import BannerImg from "../../assets/img/header-img.svg"
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import "./banner.css";
import 'animate.css';
import TrackVisibility from "react-on-screen";

const Banner = () => {
    const [text] = useTypewriter({
        words: ["Web Developer", "Front-End Developer"],
        loop: {},
    });

  return (
    <section className="banner">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>
                                    Hi! I'm Taiseer Salah,
                                    <br></br>
                                    <span className="wrap">I'm {text}</span>
                                    <Cursor/>
                                </h1>
                                <p>I'm in love with front-end web development. I'm passionate for learning new technologies</p>
                                <button >
                                    Download CV 
                                    <i className="bi bi-download"></i>
                                </button>
                            </div>
                        }
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={BannerImg} alt="BaneerImage"/>
                            </div>
                        }
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Banner;