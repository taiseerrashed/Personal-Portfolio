import { Col } from "react-bootstrap";

const ProjectCard = ({title, description, imgUrl, link}) => {
  return (
    <Col sm={6} md={4}>
        <div className="proj-box">
            <img src={imgUrl} alt="projImage"/>
            <div className="proj-text">
                <h4>{title}</h4>
                <span>{description}</span>
                <a href={link}><i className="bi bi-link-45deg d-block fs-4"></i></a>
            </div>
        </div>
    </Col>
  );
};

export default ProjectCard;