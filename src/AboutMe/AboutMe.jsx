/* eslint-disable react/prop-types */
import "./AboutMe.css";
import { motion, MotionConfig } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const AboutMe = ({ scrollToAbout }) => {
  const aboutMe = (
    <div className="about-text">
      <p>About Me</p>
      <p>
        Influenced by my father, a games developer and designer, I dipped my
        toes into graphic design & coding during the Myspace era. Though life
        had other plans, I always had the dream of one day becoming a developer.
        Now, with CodeYourFuture&apos;s help, I&apos;m able to fulfill that
        dream. Join me on my journey of learning and creation. Thank you for
        visiting my portfolio. Let&apos;s craft something extraordinary
        together!
      </p>
    </div>
  );

  const contactMe = [
    {
      href: "https://github.com/MarcusZagorski",
      className: "github",
      svg: "mingcute:github-fill",
    },
    {
      href: "https://www.linkedin.com/in/marcus-zagorski/",
      className: "linkedin",
      svg: "mdi:linkedin",
    },
    {
      href: "https://wa.me/447511173832",
      className: "whatsapp",
      svg: "mingcute:whatsapp-fill",
    },
    {
      href: "https://twitter.com/matszCoder",
      className: "twitter",
      svg: "ri:twitter-x-fill",
    },
  ];

  const techStack = [
    { svg: "flowbite:html-solid", techName: "HTML" },
    { svg: "flowbite:css-solid", techName: "CSS" },
    { svg: "cib:js", techName: "JS" },
    { svg: "mdi:react", techName: "REACT" },
    { svg: "ri:nodejs-line", techName: "NODEJS" },
    { svg: "simple-icons:postman", techName: "POSTMAN" },
    { svg: "akar-icons:postgresql-fill", techName: "POSTGRESQL" },
    { svg: "simple-icons:jest", techName: "JEST" },
    { svg: "simple-icons:chai", techName: "CHAI" },
    { svg: "devicon-plain:photoshop", techName: "PHOTOSHOP" },
    { svg: "solar:figma-bold-duotone", techName: "FIGMA" },
  ];

  return (
    <>
      <div className="about" ref={scrollToAbout}>
        {aboutMe}
        <div className="contact">
          {contactMe.map((contact, index) => (
            <a href={contact.href} key={index} target="_blank">
              <motion.div
                whileHover={{
                  rotate: "2deg",
                  scale: 1.1,
                }}
                className={contact.className}
              >
                <Icon
                  icon={contact.svg}
                  width="2rem"
                  height="2rem"
                  color="white"
                ></Icon>
              </motion.div>
            </a>
          ))}
        </div>
      </div>

      <MotionConfig
        transition={{
          duration: "18",
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="technologies">
          {techStack.map((tech, index) => (
            <motion.div
              className="technology"
              initial={{ left: "-160%" }}
              animate={{ left: ["100%", "-160%"] }}
              key={index}
            >
              <div className="technology-icon">
                <Icon
                  icon={tech.svg}
                  width="2rem"
                  height="2rem"
                  color="white"
                ></Icon>
              </div>
              <p className="technology-name">{tech.techName}</p>
            </motion.div>
          ))}
        </div>
      </MotionConfig>
    </>
  );
};

export default AboutMe;
