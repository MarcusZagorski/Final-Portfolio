/* eslint-disable react/prop-types */
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = ({ scrollToProjects }) => {
  const projectsBanner = (
    <div className="projects-banner" ref={scrollToProjects}>
      <p>PROJECTS</p>
    </div>
  );

  const projects = [
    {
      title: "Youtube Video Recommendations",
      image: "/fs-project-assessment.netlify.png",
      summary:
        "Developed a YouTube app that enables users to add videos to a database. Additionally, I enhanced the functionality by offering users the option to customise video titles or remain using the default YouTube title.",
      technologies: "Technologies used: ReactJS, NodeJS, PostgreSQL",
      liveView: "https://fs-project-assessment.netlify.app/",
      github: "https://github.com/MarcusZagorski/Full-Stack-Project-Assessment",
    },
    {
      title: "Chat Server App",
      image: "/mzagorski-chat-server.netlify.app_.png",
      summary:
        "Developed a Chat server application that allows users to send messages back and forth, and delete messages at their own leisure via a server hosted on Glitch. All messages come with an automatic time stamp, alongside an aesthetically pleasing design.",
      technologies: "Technologies used: ReactJS, NodeJS",
      liveView: "https://mzagorski-chat-server.netlify.app/",
      github: "https://github.com/MarcusZagorski/react-chat-server",
    },
    {
      title: "High-Scores Table",
      image: "/mzag-high-score-table.netlify.app_.png",
      summary:
        "Developed an application displaying regional high scores. My approach for this project was to showcase my responsive design implementation. The project aimed to demonstrate proficiency in crafting adaptive user interfaces tailored to diverse screen sizes and devices.",
      technologies: "Technologies used: ReactJS",
      liveView: "https://mzag-high-score-table.netlify.app/",
      github: "https://github.com/MarcusZagorski/high-score-tables",
    },
    {
      title: "Cakes-Co Website",
      image: "/mzag-cakesco.netlify.app_.png",
      summary:
        "For this project, I was tasked with creating a responsive webpage for a cake company. They provided me with a wireframe, and my task was to design a mockup page using my Figma knowledge.",
      technologies: "Technologies used: HTML, CSS",
      liveView: "https://mzag-cakesco.netlify.app/",
      github:
        "https://github.com/MarcusZagorski/Module-HTML-CSS/tree/main/Cakes-Co",
    },
    // {
    //   title: "TV-Shows App",
    // },
  ];

  const showProjects = projects.map((project, index) => {
    return (
      <div key={index} className="project-container">
        <p className="project-title">{project.title}</p>
        <img
          src={project.image}
          className="project-img"
          alt="Projects banner"
        />
        <p className="project-summary">{project.summary}</p>
        <p className="project-technologies">{project.technologies}</p>
        <div>
          <a href={project.liveView} target="_blank">
            <motion.button
              whileHover={{
                backgroundColor: "#364fc7",
              }}
            >
              Live View
            </motion.button>
          </a>
          <a href={project.github} target="_blank">
            <motion.button whileHover={{ backgroundColor: "#364fc7" }}>
              Github
            </motion.button>
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      {projectsBanner}
      <motion.div className="projects">{showProjects}</motion.div>
    </>
  );
};

export default Projects;
