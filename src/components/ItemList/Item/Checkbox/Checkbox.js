import React, { useState } from "react";
import { UilCheck } from "@iconscout/react-unicons";

// Importing the style file
import "./Checkbox.css";

// Creating the Checkbox component
const Checkbox = ({ isChecked, update }) => {
  // Setting up the state
  const [checked, setChecked] = useState(isChecked);

  // Function that will handle the checking
  const handleClick = () => {
    setChecked((prevState) => !prevState);
    update(!checked);
  };

  return (
    <div
      className={`checkbox-container ${checked ? "checked" : ""}`}
      onClick={handleClick}
    >
      {checked && <UilCheck />}
    </div>
  );
};

// Exporting the checkbox component
export default Checkbox;
