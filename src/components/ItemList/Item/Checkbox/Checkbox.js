import React from "react";
import { UilCheck } from "@iconscout/react-unicons";

// Importing the style file
import "./Checkbox.css";

// Creating the Checkbox component
const Checkbox = ({ checked, update }) => {
  return (
    <div
      className={`checkbox-container ${checked ? "checked" : ""}`}
      onClick={() => {
        update(!checked);
      }}
    >
      {checked && <UilCheck />}
    </div>
  );
};

// Exporting the checkbox component
export default Checkbox;
