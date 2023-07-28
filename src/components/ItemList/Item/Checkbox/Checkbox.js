import React, { useState } from "react";
import { UilCheck } from "@iconscout/react-unicons";

// Importing the style file
import "./Checkbox.css";

// Creating the Checkbox component
const Checkbox = ({ isChecked }) => {
  // Setting up the state
  const [checked, setChecked] = useState(isChecked);
  return (
    <div
      className={`checkbox-container ${checked ? "checked" : ""}`}
      onClick={() => {
        setChecked((prevState) => !prevState);
      }}
    >
      {checked && <UilCheck />}
    </div>
  );
};

// Exporting the checkbox component
export default Checkbox;
