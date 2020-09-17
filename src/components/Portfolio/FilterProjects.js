import React from "react";
import "./css/FilterProjects.css";
import { Motion, spring } from "react-motion";
import FolderItem from "../Shared/FolderItem";
import { useStateValue } from "../../contexts/StateProvider";
function FilterProjects() {
  const [{ selectedFolder, selectedFramework }, dispatch] = useStateValue();

  return (
    <div className="filterProject">
      <div className="filterProject__platform">
        <FolderItem
          platform
          open={selectedFolder?.label === "Web"}
          label="Web"
          icon="https://api.iconify.design/whh:html.svg?color=%234ecca3"
        />

        <FolderItem
          platform
          open={selectedFolder?.label === "Android"}
          label="Android"
          icon="https://api.iconify.design/flat-color-icons:android-os.svg"
        />
      </div>
      <div className="filterProject__framework">
        {selectedFolder?.label === "Web" && (
          <>
            <FolderItem
              framework
              open={selectedFramework?.label == "React JS"}
              label="React JS"
              icon="https://api.iconify.design/vscode-icons:file-type-reactts.svg"
            />
            <FolderItem
              framework
              open={selectedFramework?.label == ".NET"}
              label=".NET"
              icon="https://api.iconify.design/mdi:dot-net.svg?color=%23FF00FF"
            />
          </>
        )}
        {selectedFolder?.label === "Android" && (
          <>
            <FolderItem
              framework
              open={selectedFramework?.label == "React Native"}
              label="React Native"
              icon="https://api.iconify.design/vscode-icons:file-type-reactts.svg"
            />
            <FolderItem
              framework
              open={selectedFramework?.label == "Java"}
              label="Java"
              icon="https://api.iconify.design/logos:java.svg"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default FilterProjects;
