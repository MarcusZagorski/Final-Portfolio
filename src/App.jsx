import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function App() {
  const [homeInView, setHomeInView] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);
  const [projectInView, setProjectInView] = useState(false);

  const scrollToHome = useRef(null);
  const scrollToAbout = useRef(null);
  const scrollToProjects = useRef(null);

  return (
    <>
      <motion.main
        className="home"
        ref={scrollToHome}
        onViewportEnter={() => setHomeInView(true)}
        onViewportLeave={() => setHomeInView(false)}
      >
        <Navbar
          homeInView={homeInView}
          aboutInView={aboutInView}
          projectInView={projectInView}
          scrollToAbout={scrollToAbout}
          scrollToHome={scrollToHome}
          scrollToProjects={scrollToProjects}
        />
        <Hero />
      </motion.main>

      <motion.section
        onViewportEnter={() => setAboutInView(true)}
        onViewportLeave={() => setAboutInView(false)}
      >
        <AboutMe scrollToAbout={scrollToAbout} />
      </motion.section>

      <motion.section
        onViewportEnter={() => setProjectInView(true)}
        onViewportLeave={() => setProjectInView(false)}
      >
        <Projects scrollToProjects={scrollToProjects} />
      </motion.section>
    </>
  );
}

export default App;
