import React from "react";
import { UilTrashAlt } from "@iconscout/react-unicons";

// Importing the costume components
import Button from "../../Button/Button";

// Importing the style file
import "./Item.css";

// Creating the Item component
const Item = ({ label }) => {
  return (
    <li>
      <div className="label">{label}</div>
      <Button label="Remove" icon={<UilTrashAlt />} del />
    </li>
  );
};

// Exporting the Item component
export default Item;
