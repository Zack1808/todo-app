import React from "react";

// Importing the style file
import "./Button.css";

// Creating the button component
const Button = ({ label = "label", icon, del }) => {
  return (
    <button className={`btn ${del ? "delete" : ""}`}>
      <span>
        <p>{label}</p>
        {icon}
      </span>
    </button>
  );
};

// Exporting the Button component
export default Button;
