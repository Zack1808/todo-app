import React from "react";
import { UilPlus } from "@iconscout/react-unicons";

// Importing costume components
import Button from "../Button/Button";

// Importing the style file
import "./Form.css";

// Creating the Form component
const Form = ({ label = "label", placeholder = "placeholder" }) => {
  return (
    <form>
      <label htmlFor="addItem">{label}</label>
      <div className="input">
        <input type="text" id="addItem" placeholder={placeholder} />
      </div>
      <div className="button">
        <Button label="Add item" icon={<UilPlus />} />
      </div>
    </form>
  );
};

// Exporting the Form component
export default Form;
