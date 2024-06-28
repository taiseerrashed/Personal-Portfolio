import { Row } from "react-bootstrap";
import projImg1 from "../../assets/img/project-1.png";
import projImg2 from "../../assets/img/project-2.png";
import projImg3 from "../../assets/img/project-3.png";
import projImg4 from "../../assets/img/project-4.png";
import projImg5 from "../../assets/img/project-5.png";
import projImg6 from "../../assets/img/project-6.png";
import ProjectCard from "./ProjectCard";

const Section2 = () => {
    const projects = [
        {
            title: "Kalay",
            description: "HTML & CSS",
            imgUrl: projImg1,
            link: "https://taiseerrashed.github.io/new-proj/"
        },
        {
            title: "Famms",
            description: "HTML & CSS",
            imgUrl: projImg2,
            link: "https://taiseerrashed.github.io/famms/"
        },
        {
            title: "Travels",
            description: "HTML & CSS & Bootstrap",
            imgUrl: projImg3,
            link: "https://taiseerrashed.github.io/TravelsInEgypt/"
        },
        {
            title: "Islamic",
            description: "HTML & CSS & JS",
            imgUrl: projImg4,
            link: "https://taiseerrashed.github.io/Islamic-project/"
        },
        {
            title: "Laptops Store",
            description: "HTML & CSS & JS & ReactJS",
            imgUrl: projImg5,
            link: "https://laptops-store-react-js.vercel.app/"
        },
        {
            title: "Prayers Times",
            description: "HTML & CSS & JS & ReactJS",
            imgUrl: projImg6,
            link: "https://prayers-times-delta.vercel.app/"
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
  )
}

export default Section2;