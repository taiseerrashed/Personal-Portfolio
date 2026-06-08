import { Row } from "react-bootstrap";
import projImg1 from "../../assets/img/proj-1.png";
import projImg2 from "../../assets/img/proj-2.png";
import projImg4 from "../../assets/img/proj-4.png";
import projImg6 from "../../assets/img/proj-6.png";
import projImg7 from "../../assets/img/project-7.png";
import projImg10 from "../../assets/img/project-10.png";

import ProjectCard from "./ProjectCard";

const Section1 = () => {
  const projects = [
    {
      title: "Entro",
      description: "HTML & CSS",
      imgUrl: projImg1,
      link: "https://taiseerrashed.github.io/entro/",
    },
    {
      title: "Technos",
      description: "HTML & CSS & Js",
      imgUrl: projImg2,
      link: "https://taiseerrashed.github.io/E-Commerce-project/",
    },
    {
      title: "Weather App",
      description: "HTML & CSS & JS",
      imgUrl: projImg6,
      link: "https://taiseerrashed.github.io/Weather-app.js/",
    },
    {
      title: "Countries App",
      description: "React.js & Tailwind CSS & TypeScript & React Query & Zustand",
      imgUrl: projImg10,
      link: "https://countries-api-eight-ashy.vercel.app/",
    },
    {
      title: "Book Store",
      description: "HTML & CSS & JS & React JS",
      imgUrl: projImg4,
      link: "https://bookstore-reactjs.netlify.app/",
    },
    {
      title: "Digital Marketing",
      description: "HTML & Tailwind CSS & JS",
      imgUrl: projImg7,
      link: "https://taiseerrashed.github.io/digital-marketing-proj/",
    },
  ];

  return (
    <>
      <Row>
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </Row>
    </>
  );
};

export default Section1;
