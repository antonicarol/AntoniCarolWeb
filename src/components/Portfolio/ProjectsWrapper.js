import React, { useContext, useEffect, useState } from "react";
import "./css/ProjectsWrapper.css";
import Project from "./Project";

import { useStateValue } from "../../contexts/StateProvider";
import FolderTitle from "../Shared/FolderTitle";
import FilterListIcon from "@material-ui/icons/FilterList";

function ProjectsWrapper() {
  const [{ filteredProjects, selectedFramework }] = useStateValue();

  return (
    <div className="projectsWrapper">
      <div className="projectsWrapper__top">
        <div className="projectsWrapper__title">
          <img alt="" src={selectedFramework.icon} />
          <h1>{selectedFramework.label}</h1>
          <FilterListIcon fontSize="large" />
        </div>
      </div>
      {filteredProjects.length != 1 ? (
        <div className="projectsWrapper__body">
          {filteredProjects?.map((proj) => (
            <Project project={proj.data} key={proj.id} />
          ))}
        </div>
      ) : (
        <div className="projectsWrapper__bodySmall">
          {filteredProjects?.map((proj) => (
            <Project project={proj.data} key={proj.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsWrapper;
