import React, { useState, useContext, useEffect } from "react";
import "./css/Portfolio.css";

import ProjectsWrapper from "./ProjectsWrapper";
import FilterProjects from "./FilterProjects";
import ProjectDetail from "./ProjectDetail";
import { useStateValue } from "../../contexts/StateProvider";
import db from "../../firebase/firebase";
import { actionTypes } from "../../contexts/reducer";
import { Message } from "semantic-ui-react";

function Portfolio() {
  const [
    { projects, filteredProjects, selectedFramework },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    db.collection("projects").onSnapshot((snap) => {
      const proj = snap.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      dispatch({
        type: actionTypes.SET_PROJECTS,
        projects: proj,
      });
    });
  }, []);

  return (
    <div className="portfolio">
      <div className="portfolio__Filters">
        <FilterProjects />
      </div>
      <div className="portfolio__body">
        {selectedFramework ? (
          <ProjectsWrapper />
        ) : (
          <h1>Select from the folder structure the filter!</h1>
        )}
      </div>
      {/** WELL HAVE THE PROJECTS SHOWED */}
    </div>
  );
}

export default Portfolio;
