import React from "react";
import "./css/Resume.css";
import { motion } from "framer-motion";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const variantVariants = {
  hidden: {
    x: -1500,
  },
  visible: {
    x: 50,
    transition: {
      type: "tween",
      delay: 0.6,
      duration: 0.6,
    },
  },
};
function Resume() {
  return (
    <motion.div
      variants={variantVariants}
      initial="hidden"
      animate="visible"
      className="resume"
    >
      <div className="resume__education">
        <h1>Education</h1>
        <div className="resume__education__content">
          <div className="resume__educationItem">
            <div className="resume__educationItem__title">
              <SchoolIcon />
              <p>Technological Bachelor · 2018</p>
            </div>
            <span>Institut Pere Vives Vich, Igualada-Barcelona</span>
            <p>Learned more complex bases of Pysichs, Maths and Technology.</p>
          </div>
          <div className="resume__educationItem">
            <div className="resume__educationItem__title">
              <SchoolIcon />
              <p>
                Degree in Digital Interaction and Computing Techniques ·2021
              </p>
            </div>
            <span>Lleida's College-Campus Igualada</span>
            <p>
              Acquired skills in UI and UX design, bases of programming with
              Java, C++, Python. Learned bases of SQL Database Management, API
              connection, Docker containers and creating an Startup with
              success.
            </p>
          </div>
          <div className="resume__educationItem">
            <div className="resume__educationItem__title">
              <SchoolIcon />
              <p>Self Learning · Every Day of the year!</p>
            </div>
            <span>On my house! Helped by the Internet</span>
            <p>
              Learned to create Websites with React JS, acquired a good CSS
              skills, and Learned a lot of Git version Control
            </p>
          </div>
        </div>
      </div>
      <div className="resume__work">
        <h1>Work</h1>
        <div className="resume__work__content">
          <div className="resume__workItem">
            <div className="resume__workItem__title">
              <WorkIcon />
              <p>College Practices· Currently working</p>
            </div>
            <span>MPM Software, Igualada-Barcelona</span>
            <p>
              Working on Assurance Software for all type of comanies. Coding
              wiht C· and .NET framework, and SQL as database management
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
