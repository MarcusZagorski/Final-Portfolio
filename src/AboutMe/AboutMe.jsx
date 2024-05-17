/* eslint-disable react/prop-types */
import "./AboutMe.css";
import { motion, MotionConfig } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const AboutMe = ({ scrollToAbout }) => {
  return (
    <motion.div>
      <div className="about" ref={scrollToAbout}>
        <div className="about-text">
          <p>About Me</p>
          <p>
            Influenced by my father, a games developer and designer, I dipped my
            toes into graphic design & coding during the Myspace era. Though
            life had other plans, I always had the dream of one day becoming a
            developer. Now, with CodeYourFuture&apos;s help, I&apos;m able to
            fulfill that dream. Join me on my journey of learning and creation.
            Thank you for visiting my portfolio. Let&apos;s craft something
            extraordinary together!{" "}
          </p>
        </div>
        <div className="contact">
          <a href="https://github.com/MarcusZagorski" target="_blank">
            <motion.div
              whileHover={{
                rotate: "2deg",
                scale: 1.1,
              }}
              className="github"
            >
              <Icon
                icon="mingcute:github-fill"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </motion.div>
          </a>

          <a
            href="https://www.linkedin.com/in/marcus-zagorski/"
            target="_blank"
          >
            <motion.div
              whileHover={{
                rotate: "-2deg",
                scale: 1.1,
              }}
              className="linkedin"
            >
              <Icon
                icon="mdi:linkedin"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </motion.div>
          </a>

          <a href="https://wa.me/447511173832" target="_blank">
            <motion.div
              whileHover={{
                rotate: "2deg",
                scale: 1.1,
              }}
              className="whatsapp"
            >
              <Icon
                icon="mingcute:whatsapp-fill"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </motion.div>
          </a>

          <a href="https://twitter.com/matszCoder" target="_blank">
            <motion.div
              whileHover={{
                rotate: "-2deg",
                scale: 1.1,
              }}
              className="twitter"
            >
              <Icon
                icon="ri:twitter-x-fill"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </motion.div>
          </a>
        </div>
      </div>
      <MotionConfig
        transition={{
          duration: "18",
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div className="technologies">
          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="flowbite:html-solid"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </div>
            <p className="technology-name">HTML</p>
          </motion.div>

          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="flowbite:css-solid"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </div>
            <p className="technology-name">CSS</p>
          </motion.div>

          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="cib:js"
                width="2rem"
                height="2rem"
                color="white"
                style={{ borderRadius: "10px" }}
              ></Icon>
            </div>
            <p className="technology-name">JS</p>
          </motion.div>

          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="mdi:react"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </div>
            <p className="technology-name">REACT</p>
          </motion.div>

          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="ri:nodejs-line"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </div>
            <p className="technology-name">NODEJS</p>
          </motion.div>

          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="simple-icons:postman"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </div>
            <p className="technology-name">POSTMAN</p>
          </motion.div>

          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="akar-icons:postgresql-fill"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </div>
            <p className="technology-name">POSTGRESQL</p>
          </motion.div>

          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="simple-icons:jest"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </div>
            <p className="technology-name">JEST</p>
          </motion.div>

          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="simple-icons:chai"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </div>
            <p className="technology-name">CHAI</p>
          </motion.div>

          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="devicon-plain:photoshop"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </div>
            <p className="technology-name">PHOTOSHOP</p>
          </motion.div>

          <motion.div
            className="technology"
            initial={{ left: "-160%" }}
            animate={{ left: ["100%", "-160%"] }}
            end={{}}
          >
            <div className="technology-icon">
              <Icon
                icon="solar:figma-bold-duotone"
                width="2rem"
                height="2rem"
                color="white"
              ></Icon>
            </div>
            <p className="technology-name">FIGMA</p>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </motion.div>
  );
};

export default AboutMe;
