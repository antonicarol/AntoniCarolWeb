import React from "react";
import { motion } from "framer-motion";
import "./css/Projects.css";
import { pageAppearFromRight } from "../animations/variants";
import ProjectCard from "../components/ProjectCard";

import useProjects from "../hooks/useProjects";
function Projects() {
  const projects = useProjects();
  return (
    <motion.div
      variants={pageAppearFromRight}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="projects"
    >
      <div className="projects__wrapper">
        {projects?.data?.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
