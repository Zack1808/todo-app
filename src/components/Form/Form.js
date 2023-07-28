import React from "react";

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
    </form>
  );
};

// Exporting the Form component
export default Form;
