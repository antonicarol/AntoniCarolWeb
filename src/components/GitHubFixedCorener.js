import { GitHub } from "@material-ui/icons";
import React from "react";
import "./css/GitHubFixedCorner.css";

function GitHubFixedCorener({ url }) {
  return (
    <div className="gitFixedCorner" onClick={() => window.open(url)}>
      <div className="ribbon">
        <GitHub />
      </div>
    </div>
  );
}

export default GitHubFixedCorener;
