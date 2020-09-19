import React, { useEffect, useState } from "react";
import projects from "../contexts/projects";

const useProjects = () => {
  const [data, setData] = useState(projects);

  return { data };
};

export default useProjects;
