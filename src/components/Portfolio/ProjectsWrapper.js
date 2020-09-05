import React, { useContext, useEffect, useState } from "react";
import "./css/ProjectsWrapper.css";
import Project from "./Project";

import { useStateValue } from "../../contexts/StateProvider";
import FolderTitle from "../Shared/FolderTitle";
import FilterListIcon from "@material-ui/icons/FilterList";

function ProjectsWrapper() {
  const [{ filteredProjects, selectedFolder }] = useStateValue();

  return (
    <div className="projectsWrapper">
      <div className="projectsWrapper__top">
        <FolderTitle
          title={selectedFolder?.label}
          icon={selectedFolder?.icon}
        />
        <FilterListIcon fontSize="large" />
      </div>
      <div className="projectsWrapper__body">
        {filteredProjects?.map((proj) => (
          <Project project={proj.data} key={proj.id} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsWrapper;
