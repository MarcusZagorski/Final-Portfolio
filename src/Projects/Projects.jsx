/* eslint-disable react/prop-types */
import "./Projects.css";

const Projects = ({ scrollToProjects }) => {
  const projects = [
    {
      title: "Youtube Video Recommendations",
      image: "/fs-project-assessment.netlify.png",
      summary:
        "Developed a YouTube app that enables users to add videos to a database. Additionally, I enhanced the functionality by offering users the option to customise video titles or remain using the default YouTube title.",
      technologies: "Technologies used: ReactJS, NodeJS, PostgreSQL",
    },
    {
      title: "Chat Server App",
      image: "/mzagorski-chat-server.netlify.app_.png",
      summary:
        "Developed a YouTube app that enables users to add videos to a database. Additionally, I enhanced the functionality by offering users the option to customise video titles or remain using the default YouTube title.",
      technologies: "Technologies used: ReactJS, NodeJS",
    },
    {
      title: "High-Scores Table",
      image: "/mzag-high-score-table.netlify.app_.png",
      summary:
        "Developed an application displaying regional high scores. My approach for this project was to showcase my responsive design implementation. The project aimed to demonstrate proficiency in crafting adaptive user interfaces tailored to diverse screen sizes and devices.",
      technologies: "Technologies used: ReactJS",
    },
    {
      title: "Cakes-Co Website",
      image: "/mzag-cakesco.netlify.app_.png",
      summary:
        "Developed a YouTube app that enables users to add videos to a database. Additionally, I enhanced the functionality by offering users the option to customise video titles or remain using the default YouTube title.",
      technologies: "Technologies used: HTML, CSS",
    },
    // {
    //   title: "TV-Shows App",
    // },
  ];

  const showProjects = projects.map((project, index) => {
    return (
      <>
        <div key={index} className="project-container">
          <p className="project-title">{project.title}</p>
          <img src={project.image} className="project-img" />
          <p className="project-summary">{project.summary}</p>
          <p className="project-technologies">{project.technologies}</p>
          <div>
            <button>Live View</button>
            <button>Github</button>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="projects-banner" ref={scrollToProjects}>
        <p>PROJECTS</p>
      </div>
      <div className="projects">
        {/* <div className="project-container"></div> */}
        {showProjects}
      </div>
    </>
  );
};

export default Projects;
