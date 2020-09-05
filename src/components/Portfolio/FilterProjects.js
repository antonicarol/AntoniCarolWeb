import React from "react";
import "./css/FilterProjects.css";

import FolderItem from "../Shared/FolderItem";
import { useStateValue } from "../../contexts/StateProvider";
function FilterProjects() {
  const [{ selectedFolder }, dispatch] = useStateValue();

  return (
    <div className="filterProject">
      <FolderItem
        open={selectedFolder?.label === "React"}
        label="React"
        icon="https://api.iconify.design/vscode-icons:file-type-reactts.svg"
      />

      <FolderItem
        open={selectedFolder?.label == ".NET"}
        label=".NET"
        icon="https://api.iconify.design/mdi:dot-net.svg?color=%23FF00FF"
      />
    </div>
  );
}

export default FilterProjects;
