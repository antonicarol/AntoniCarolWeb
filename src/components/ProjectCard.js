import React from "react";
import "./css/ProjectCard.css";
import LinkIcon from "@material-ui/icons/Link";

function ProjectCard({ project }) {
  return (
    <>
      <div className="projectCard">
        <img src={project.image} alt="" />
        <div className="projectCard__info">
          <h4>{project.title}</h4>
          <p>{project.category}</p>
          <LinkIcon />
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
