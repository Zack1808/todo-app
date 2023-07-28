import React, { useRef } from "react";
import { UilPlus } from "@iconscout/react-unicons";

// Importing costume components
import Button from "../Button/Button";

// Importing the style file
import "./Form.css";

// Creating the Form component
const Form = ({ label = "label", placeholder = "placeholder", submit }) => {
  // Setting up the refs
  const inputRef = useRef();
  const formRef = useRef();

  // Function that will handle the form submition
  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current?.value.replace(/\s+/g, "") !== "" &&
      submit(inputRef.current?.value);
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="addItem">{label}</label>
      <div className="input">
        <input
          ref={inputRef}
          type="text"
          id="addItem"
          placeholder={placeholder}
        />
      </div>
      <div className="button">
        <Button label="Add item" icon={<UilPlus />} />
      </div>
    </form>
  );
};

// Exporting the Form component
export default Form;
