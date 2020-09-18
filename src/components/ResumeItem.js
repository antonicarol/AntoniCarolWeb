import React from "react";
import "./css/ResumeItem.css";
function ResumeItem({ title, year, location, info, Icon }) {
  return (
    <div className="resumeItem">
      <div className="resumeItem__title">
        <Icon />
        <p>
          {title} · {year}
        </p>
      </div>
      <span>{location}</span>
      <p>{info}</p>
    </div>
  );
}

export default ResumeItem;
