import React from "react";
import "./css/FilterProjects.css";
function FilterProjects() {
  return (
    <div className="filterProject">
      <div className="filterProject__item">
        <img
          src="https://api.iconify.design/vscode-icons:file-type-reactts.svg"
          alt=""
        />
        <p>React Js</p>
      </div>
      <div className="filterProject__item">
        <img src="https://api.iconify.design/logos:django.svg" alt="" />
        <p>Django</p>
      </div>
      <div className="filterProject__item">
        <img
          src="https://api.iconify.design/cib:dot-net.svg?color=%23FF00FF    "
          alt=""
        />
        <p>Microsoft .NET</p>
      </div>
    </div>
  );
}

export default FilterProjects;
