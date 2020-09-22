import React from "react";
import "./css/ProjectCard.css";
import LinkIcon from "@material-ui/icons/Link";
import "./css/imagehover.min.css";
function ProjectCard({ project }) {
  return (
    <>
      <figure
        onClick={() => window.open(project.url)}
        className="projectCard imghvr-flip-horiz"
      >
        <img src={project.image} alt="" />
        <figcaption>
          <h4>{project.title}</h4>
          <p>{project.category}</p>
          <LinkIcon />
        </figcaption>
      </figure>
    </>
  );
}

export default ProjectCard;
