import React from "react";
import "./css/Skills.css";
import { AnimatePresence, motion } from "framer-motion";

const variantVariants = {
  hidden: {
    x: -1500,
  },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      delay: 0.6,
      duration: 0.6,
    },
  },
  exit: {
    x: 1500,
    transition: {
      type: "tween",
      delay: 0.6,
      duration: 0.6,
    },
  },
};
function Skills() {
  return (
    <motion.div
      key="skills"
      variants={variantVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="skills"
    >
      <center>
        <button>See Skills by Languages</button>
      </center>
      <div className="skills__content">
        <div className="skills__basic">
          <div className="skills__basic__title">
            <h1>Basic</h1>
          </div>
          <div className="skills__basic__body">
            <div className="skills__basic__item">
              <p>Git</p>
              <progress value={85} max={100} />
            </div>
            <div className="skills__basic__item">
              <p>Debug</p>
              <progress value={60} max={100} />
            </div>
            <div className="skills__basic__item">
              <p>Design</p>
              <progress value={40} max={100} />
            </div>
            <div className="skills__basic__item">
              <p>TeamWork</p>
              <progress value={90} max={100} />
            </div>
          </div>
        </div>
        <div className="skills__web">
          <div className="skills__web__title">
            <h1>Web</h1>
          </div>
          <div className="skills__web__body">
            <div className="skills__web__item">
              <p>HTML</p>
              <progress value={80} max={100} />
            </div>
            <div className="skills__web__item">
              <p>CSS</p>
              <progress value={70} max={100} />
            </div>
            <div className="skills__web__item">
              <p>JavaScript</p>
              <progress value={60} max={100} />
            </div>
            <div className="skills__web__item">
              <p>React JS</p>
              <progress value={70} max={100} />
            </div>
          </div>
        </div>
        <div className="skills__db">
          <div className="skills__db__title">
            <h1>Database</h1>
          </div>
          <div className="skills__db__body">
            <div className="skills__db__item">
              <p>SQL</p>
              <progress value={70} max={100} />
            </div>
            <div className="skills__db__item">
              <p>MongoDB</p>
              <progress value={60} max={100} />
            </div>
            <div className="skills__db__item">
              <p>API</p>
              <progress value={80} max={100} />
            </div>
            <div className="skills__db__item">
              <p>Firebase</p>
              <progress value={70} max={100} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
