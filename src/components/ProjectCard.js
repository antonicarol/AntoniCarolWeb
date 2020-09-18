import React from "react";
import "./css/ProjectCard.css";
import { useStateValue } from "../contexts/StateProvider";
import { actionTypes } from "../contexts/reducer";
import LinkIcon from "@material-ui/icons/Link";

function ProjectCard({ project }) {
  const [state, dispatch] = useStateValue();

  const setProject = () => {
    dispatch({
      type: actionTypes.SET_DETAIL_PROJECT,
      detailProject: project,
    });
  };

  return (
    <>
      <div onClick={setProject} className="projectCard">
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
