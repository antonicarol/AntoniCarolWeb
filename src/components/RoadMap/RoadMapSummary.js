import React from "react";
import "./css/RoadMapSummary.css";
function RoadMapSummary() {
  return (
    <div className="roadMapSummary">
      {/** Some info about my studies */}
      <div className="roadMapSummary__info">
        <h1>College doesn't work for developers like me!</h1>
        <p>
          When I finished the second year of my Computer Science studies, I
          realised that if you want to be a good developer, you need to take a
          long journey of self teachment to really learn and increase your
          developening skills
        </p>
        <p>
          I really wanted to be good, and not just good, the{" "}
          <strong>BEST</strong>. So I did a research and here I am, working to
          become a <strong>FULL STACK DEVELOPER</strong>
        </p>
      </div>
    </div>
  );
}

export default RoadMapSummary;
