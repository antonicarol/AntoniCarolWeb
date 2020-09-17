import React, { useState, useEffect } from "react";
import "./css/FolderItem.css";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { useStateValue } from "../../contexts/StateProvider";
import { actionTypes } from "../../contexts/reducer";

function FolderItem({ icon, label, open, platform, framework }) {
  const [{ projects }, dispatch] = useStateValue();
  console.log(projects);
  const handleClick = () => {
    if (platform) {
      dispatch({
        type: actionTypes.SET_PORTFOLIO_FOLDER,
        folder: { icon, label },
      });
    } else {
      dispatch({
        type: actionTypes.SET_PORTFOLIO_FRAMEWORK,
        framework: { icon, label },
        filter: label,
        allProjects: projects,
      });
    }
  };
  return (
    <div onClick={handleClick} className="folderItem">
      {open ? <FolderOpenIcon /> : <FolderIcon />}
      <img src={icon} alt="" />
      <p>{label}</p>
    </div>
  );
}

export default FolderItem;
