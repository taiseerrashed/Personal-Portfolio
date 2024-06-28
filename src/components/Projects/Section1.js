import { Row } from "react-bootstrap";
import projImg1 from "../../assets/img/proj-1.png";
import projImg2 from "../../assets/img/proj-2.png";
import projImg3 from "../../assets/img/proj-3.png";
import projImg4 from "../../assets/img/proj-4.png";
import projImg5 from "../../assets/img/proj-5.png";
import projImg6 from "../../assets/img/proj-6.png";
import ProjectCard from "./ProjectCard";

const Section1 = () => {
    const projects = [
        {
            title: "Entro",
            description: "HTML & CSS",
            imgUrl: projImg1,
            link: "https://taiseerrashed.github.io/entro/"
        },
        {
            title: "Technos",
            description: "HTML & CSS & Js",
            imgUrl: projImg2,
            link: "https://taiseerrashed.github.io/E-Commerce-project/"
        },
        {
            title: "Weather App",
            description: "HTML & CSS & JS",
            imgUrl: projImg6,
            link: "https://taiseerrashed.github.io/Weather-app.js/"
        },
        {
            title: "Gemini Clone",
            description: "HTML & CSS & JS & React JS",
            imgUrl: projImg3,
            link: "https://taiseerrashed.github.io/Gemini-Clone/"
        },
        {
            title: "Book Store",
            description: "HTML & CSS & JS & React JS",
            imgUrl: projImg4,
            link: "https://bookstore-reactjs.netlify.app/"
        },
        {
            title: "E-commerce",
            description: "HTML & CSS & JS & React JS",
            imgUrl: projImg5,
        }, 
    ];

  return (
    <>
        <Row>
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard key={index} {...project} />
                    );
                })
            }
        </Row>
    </>
  );
};

export default Section1;