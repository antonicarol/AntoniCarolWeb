import React from "react";
import "./css/Resume.css";
import { motion } from "framer-motion";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ResumeItem from "../components/ResumeItem";

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
          <ResumeItem
            title="Technological Bachelor"
            year="2018"
            location="Institut Pere Vives Vich, Igualada-Barcelona"
            info="Learned more complex bases of Pysichs, Maths and Technology."
            Icon={SchoolIcon}
          />
          <ResumeItem
            title="Degree in Digital Interaction and Computing Techniques"
            year="2021"
            location="Lleida's College-Campus Igualada"
            info="Acquired skills in UI and UX design, bases of programming with
            Java, C++, Python. Learned bases of SQL Database Management, API
            connection, Docker containers and creating an Startup with
            success."
            Icon={SchoolIcon}
          />
          <ResumeItem
            title="Self Learning"
            year="Every Day of the year!"
            location="On my house! Helped by the Interneta"
            info=" Learned to create Websites with React JS, acquired a good CSS
            skills, and Learned a lot of Git version Control"
            Icon={SchoolIcon}
          />
        </div>
      </div>
      <div className="resume__work">
        <h1>Work</h1>
        <div className="resume__work__content">
          <ResumeItem
            title="College Practices"
            year="Currently working"
            location="MPM Software, Igualada-Barcelona"
            info=" Working on Assurance Software for all type of comanies. Coding
            wiht C· and .NET framework, and SQL as database management."
            Icon={WorkIcon}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
