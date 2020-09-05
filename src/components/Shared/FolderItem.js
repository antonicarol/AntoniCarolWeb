import React, { useState, useEffect } from "react";
import "./css/FolderItem.css";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { useStateValue } from "../../contexts/StateProvider";
import { actionTypes } from "../../contexts/reducer";

function FolderItem({ icon, label, open }) {
  const [{ projects }, dispatch] = useStateValue();
  console.log(projects);
  const handleClick = () => {
    dispatch({
      type: actionTypes.SET_PORTFOLIO_FOLDER,
      folder: { icon, label },
      filter: label,
      allProjects: projects,
    });
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
