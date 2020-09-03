import React from "react";
import { Graph } from "react-d3-graph";
import "./css/RoadMapGraph.css";

// graph payload (with minimalist structure)
const data = {
  nodes: [
    {
      id: "Web Development",
      labelPosition: "top",
      size: 700,
      fill: "white",
      x: 50,
      y: 50,
    },
    { id: "CSS", x: 200, y: 70, labelPosition: "bottom", color: "#264de4" },
    { id: "HTML", x: 75, y: 200, labelPosition: "left" },
    { id: "JS", x: 200, y: 300 },
    { id: "FlexBox", x: 350, y: 50, color: "#2965f1" },
    { id: "BEM", x: 350, y: 100, color: "#2965f1" },
    { id: "Animations", x: 350, y: 150, color: "#2965f1" },
  ],

  links: [
    { source: "Web Development", target: "CSS" },
    { source: "Web Development", target: "HTML" },
    { source: "Web Development", target: "JS" },
    { source: "CSS", target: "FlexBox" },
    { source: "CSS", target: "BEM" },
    { source: "CSS", target: "Animations" },
  ],
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  automaticRearrangeAfterDropNode: false,
  collapsible: false,
  directed: false,
  focusAnimationDuration: 0.75,
  focusZoom: 1,
  height: 400,
  highlightDegree: 1,
  highlightOpacity: 1,
  linkHighlightBehavior: true,
  maxZoom: 4,
  minZoom: 0.1,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: true,
  staticGraphWithDragAndDrop: false,
  width: 800,
  d3: {
    alphaTarget: 0.05,
    gravity: -400,
    linkLength: 180,
    linkStrength: 1,
    disableLinkForce: true,
  },
  node: {
    color: "#4ecca3",
    fontColor: "white",
    fontSize: 12,
    fontWeight: "normal",
    highlightColor: "SAME",
    highlightFontSize: 12,
    highlightFontWeight: "bold",
    highlightStrokeColor: "blue",
    highlightStrokeWidth: "SAME",
    labelProperty: "name",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: true,
    size: 500,
    strokeColor: "none",
    strokeWidth: 2,
    svg: "",
    symbolType: "circle",
  },
  link: {
    color: "#d3d3d3",
    fontColor: "black",
    fontSize: 12,
    fontWeight: "normal",
    highlightColor: "blue",
    highlightFontSize: 8,
    highlightFontWeight: "bold",
    labelProperty: "label",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: true,
    semanticStrokeWidth: true,
    strokeWidth: 1.5,
    markerHeight: 6,
    markerWidth: 6,
  },
};

function RoadMapGraph() {
  return (
    <div className="roadMapGraph">
      <div className="svg-container">
        <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={data}
          config={myConfig}
        />
      </div>
    </div>
  );
}

export default RoadMapGraph;
