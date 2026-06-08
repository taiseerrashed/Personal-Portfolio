import { Row } from "react-bootstrap";
import projImg1 from "../../assets/img/proj-3.png";
import projImg2 from "../../assets/img/project-8.png";
import projImg3 from "../../assets/img/project-9.png";
import projImg5 from "../../assets/img/proj-5.png";
import projImg6 from "../../assets/img/project-6.png";
import ProjectCard from "./ProjectCard";

const Section3 = () => {
  const projects = [
    {
      title: "Gemini Clone",
      description: "HTML & CSS & JS & React JS",
      imgUrl: projImg1,
      link: "https://taiseerrashed.github.io/Gemini-Clone/",
    },
    {
      title: "CI Group",
      description: "React.js & Tailwind CSS & TypeScript",
      imgUrl: projImg2,
      link: "https://ci-group-henna.vercel.app/",
    },
    {
      title: "C’est Carrè",
      description: "Next.js & Tailwind CSS & TypeScript",
      imgUrl: projImg3,
      link: "https://cest-carre.net/",
    },
    {
      title: "Online Shopping",
      description: "HTML & CSS & JS & React JS",
      imgUrl: projImg5,
      link: "https://ecommerceapp-gray.vercel.app/",
    },
    {
      title: "Prayers Times",
      description: "HTML & CSS & JS & ReactJS",
      imgUrl: projImg6,
      link: "https://prayers-times-delta.vercel.app/",
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

export default Section3;
