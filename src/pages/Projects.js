import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./css/Projects.css";
import { useStateValue } from "../contexts/StateProvider";
import { actionTypes } from "../contexts/reducer";
import ProjectCard from "../components/ProjectCard";
import projList from "../contexts/projects";
import { useLocation } from "react-router-dom";
function Projects() {
  const [{ projects, path }, dispatch] = useStateValue();
  const location = useLocation();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_PROJECTS,
      projects: projList,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_LOCATION,
      location: location.pathname,
    });
  }, []);

  console.log(projects);

  return (
    <motion.div className="projects">
      <div className="projects__wrapper">
        {projects?.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
