import React from "react";
import "./css/ContactItem.css";
function ContactItem({ title, Icon }) {
  return (
    <div className="contactItem">
      <Icon />
      <p>{title}</p>
    </div>
  );
}

export default ContactItem;
