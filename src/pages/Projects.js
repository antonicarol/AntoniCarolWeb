import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./css/Projects.css";
import { useStateValue } from "../contexts/StateProvider";
import { actionTypes } from "../contexts/reducer";
import ProjectCard from "../components/ProjectCard";
import { useLocation } from "react-router-dom";
import useProjects from "../hooks/useProjects";
function Projects() {
  const [{ path }, dispatch] = useStateValue();
  const location = useLocation();
  const projects = useProjects();

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
        {projects?.data?.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
