import React from "react";

// Importing the style file
import "./Button.css";

// Creating the button component
const Button = ({ label = "label", icon, del, click }) => {
  return (
    <button className={`btn ${del ? "delete" : ""}`} onClick={click}>
      <span>
        <p>{label}</p>
        {icon}
      </span>
    </button>
  );
};

// Exporting the Button component
export default Button;
