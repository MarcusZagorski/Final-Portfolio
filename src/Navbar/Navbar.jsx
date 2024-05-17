/* eslint-disable react/prop-types */
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = ({
  homeInView,
  aboutInView,
  projectInView,
  scrollToAbout,
  scrollToHome,
  scrollToProjects,
}) => {
  const homeScrollTarget = () =>
    scrollToHome.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const aboutScrollTarget = () =>
    scrollToAbout.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const projectsScrollTarget = () =>
    scrollToProjects.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <nav>
      <ul className="nav">
        <motion.li
          onClick={homeScrollTarget}
          animate={
            homeInView && !aboutInView
              ? {
                  color: "rgb(102 102 102)",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "0.1rem 0.2rem",
                  width: "fit-content",
                  marginLeft: "auto",
                  rotate: "2deg",
                  scale: 1.1,
                }
              : {
                  padding: "0",
                  width: "fit-content",
                  marginLeft: "auto",
                }
          }
        >
          Home
        </motion.li>
        <motion.li
          animate={
            aboutInView
              ? {
                  color: "rgb(102 102 102)",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "0.1rem 0.2rem",
                  width: "fit-content",
                  marginLeft: "auto",
                  rotate: "2deg",
                  scale: 1.1,
                }
              : {
                  padding: "0",
                  width: "fit-content",
                  marginLeft: "auto",
                }
          }
          onClick={aboutScrollTarget}
        >
          About
        </motion.li>
        <motion.li
          animate={
            projectInView && !aboutInView
              ? {
                  color: "rgb(102 102 102)",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "0.1rem 0.2rem",
                  width: "fit-content",
                  marginLeft: "auto",
                  rotate: "2deg",
                  scale: 1.1,
                }
              : {
                  padding: "0",
                  width: "fit-content",
                  marginLeft: "auto",
                }
          }
          onClick={projectsScrollTarget}
        >
          Projects
        </motion.li>
        <li>Download CV</li>
      </ul>
    </nav>
  );
};

export default Navbar;
