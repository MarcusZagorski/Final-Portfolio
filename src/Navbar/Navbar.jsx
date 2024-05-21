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
  const nav = (navTitle, animateInView, scrollTo) => {
    return (
      <motion.li
        onClick={() =>
          scrollTo.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
        animate={
          animateInView
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
        {navTitle}
      </motion.li>
    );
  };

  return (
    <nav>
      <ul className="nav">
        {nav("Home", homeInView && !aboutInView, scrollToHome)}
        {nav("About", aboutInView, scrollToAbout)}
        {nav("Projects", projectInView && !aboutInView, scrollToProjects)}
        <motion.li whileHover={{ backgroundColor: "#364fc7" }}>
          <a
            href="/MarcusZagorskiCV.pdf"
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
          >
            View CV
          </a>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
