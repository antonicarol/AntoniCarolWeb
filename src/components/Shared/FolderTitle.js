import React from "react";
import "./css/FolderTitle.css";
function FolderTitle({ icon, title }) {
  return (
    <div className="folderTitle">
      <img src={icon} alt="" />
      <h1>{title}</h1>
    </div>
  );
}

export default FolderTitle;
