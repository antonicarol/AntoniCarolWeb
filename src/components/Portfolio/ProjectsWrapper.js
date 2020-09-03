import React, { useContext, useEffect, useState } from "react";
import "./css/ProjectsWrapper.css";
import Project from "./Project";

import { useStateValue } from "../../contexts/StateProvider";

function ProjectsWrapper() {
  const [{ projects }] = useStateValue();

  console.log(projects);

  return (
    <div className="projectsWrapper">
      {projects.map((p) => {
        return <Project key={p.id} project={p.data} />;
      })}
    </div>
  );
}

export default ProjectsWrapper;
