import React from "react";
import "./css/ProgressFrontend.css";
import { Line } from "rc-progress";

function ProgressFrontend() {
  return (
    <div className="progressFrontend">
      <div className="progressFrontend__top">
        <h1>Mastering Frontend</h1>
      </div>
      <div className="progressFrontend__body">
        <div className="progressFrontend__body__item">
          <img src="https://api.iconify.design/logos:html-5.svg" alt="" />
          <Line
            className="circleProgress"
            percent="40"
            strokeWidth="10"
            strokeColor="#4ecca3"
          />
          <h4>HTML</h4>
        </div>
        <div className="progressFrontend__body__item">
          <img src="https://api.iconify.design/logos:css-3.svg" alt="" />
          <Line
            className="circleProgress"
            percent="40"
            strokeWidth="10"
            strokeColor="#4ecca3"
          />
          <h4>CSS</h4>
        </div>
        <div className="progressFrontend__body__item">
          <img src="https://api.iconify.design/logos:javascript.svg" alt="" />
          <Line
            className="circleProgress"
            percent="40"
            strokeWidth="10"
            strokeColor="#4ecca3"
          />
          <h4>JAVASCRIPT</h4>
        </div>
      </div>
    </div>
  );
}

export default ProgressFrontend;
