import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./css/Projects.css";
import { useStateValue } from "../contexts/StateProvider";
import { actionTypes } from "../contexts/reducer";
import ProjectCard from "../components/ProjectCard";
import projList from "../contexts/projects";
function Projects() {
  const [{ projects }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_PROJECTS,
      projects: projList,
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
