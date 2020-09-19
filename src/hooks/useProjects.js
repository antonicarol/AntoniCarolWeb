import React, { useState } from "react";
import projects from "../res/projects";

const useProjects = () => {
  const [data, setData] = useState(projects);

  return { data };
};

export default useProjects;
