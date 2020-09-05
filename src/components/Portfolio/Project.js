import React, { useContext, useState } from "react";
import "./css/Project.css";
import { useStateValue } from "../../contexts/StateProvider";
import { actionTypes } from "../../contexts/reducer";

function Project({ project }) {
  const [state, dispatch] = useStateValue();

  const setProject = () => {
    dispatch({
      type: actionTypes.SET_DETAIL_PROJECT,
      detailProject: project,
    });
  };

  return (
    <>
      <div onClick={setProject} className="project">
        <div className="project__top">
          <h3>{project.title}</h3>
        </div>
        <div className="project__center">
          <img src={project.posterUrl} alt="" />
          {project.mainTool && (
            <div className="project__mainTool">
              <img src={project.mainTool[0]} alt=""></img>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Project;
