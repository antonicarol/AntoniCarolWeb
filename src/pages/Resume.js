import React, { useEffect } from "react";
import "./css/Resume.css";
import { motion } from "framer-motion";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ResumeItem from "../components/ResumeItem";
import { pageAppearFromRight } from "../animations/variants";
import { useLocation } from "react-router-dom";
import { useStateValue } from "../contexts/StateProvider";
import { actionTypes } from "../contexts/reducer";

function Resume() {
  const [{ path }, dispatch] = useStateValue();
  const location = useLocation();
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_LOCATION,
      location: location.pathname,
    });
  }, []);
  return (
    <motion.div
      variants={pageAppearFromRight}
      initial="hidden"
      animate="visible"
      className="resume"
      exit="exit"
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
