import React from "react";
import { UilTrashAlt } from "@iconscout/react-unicons";

// Importing the costume components
import Button from "../../Button/Button";
import Checkbox from "./Checkbox/Checkbox";

// Importing the style file
import "./Item.css";

// Creating the Item component
const Item = ({ label, completed }) => {
  return (
    <li>
      <div className="label">
        <Checkbox isChecked={completed} /> {label}
      </div>
      <Button label="Remove" icon={<UilTrashAlt />} del />
    </li>
  );
};

// Exporting the Item component
export default Item;
