import { Row } from "react-bootstrap";
import projImg1 from "../../assets/img/project-7.png";
import projImg2 from "../../assets/img/project-8.png";
import projImg3 from "../../assets/img/project-9.png";
import projImg4 from "../../assets/img/project-10.png";
import ProjectCard from "./ProjectCard";

const Section3 = () => {
  const projects = [
    {
      title: "Digital Marketing",
      description: "HTML & Tailwind CSS & JS",
      imgUrl: projImg1,
      link: "https://taiseerrashed.github.io/digital-marketing-proj/",
    },
    {
      title: "CI Group",
      description: "React.js & Tailwind CSS & TypeScript",
      imgUrl: projImg2,
      link: "https://ci-group-henna.vercel.app/",
    },
    {
      title: "Countries App",
      description: "React.js & Tailwind CSS & TypeScript & React Query & Zustand",
      imgUrl: projImg4,
      link: "https://countries-api-eight-ashy.vercel.app/",
    },
    {
      title: "C’est Carrè",
      description: "Next.js & Tailwind CSS & TypeScript",
      imgUrl: projImg3,
      link: "https://cest-carre.net/",
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
