import React, { useState, useContext, useEffect } from "react";
import "./css/Portfolio.css";

import ProjectsWrapper from "./ProjectsWrapper";
import FilterProjects from "./FilterProjects";
import ProjectDetail from "./ProjectDetail";
import { useStateValue } from "../../contexts/StateProvider";
import db from "../../firebase/firebase";
import { actionTypes } from "../../contexts/reducer";

function Portfolio() {
  const [tempProj, setTempProj] = useState([]);
  const [state, dispatch] = useStateValue();

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
      <div className="portfolio__summary">
        <FilterProjects />
      </div>
      <div className="portfolio__body">
        <ProjectsWrapper />
        <div className="portfolio__detail">
          <ProjectDetail project={{}} />
        </div>
      </div>

      {/** WELL HAVE THE PROJECTS SHOWED */}
    </div>
  );
}

export default Portfolio;
