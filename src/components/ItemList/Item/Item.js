import React from "react";
import { UilTrashAlt } from "@iconscout/react-unicons";

// Importing the costume components
import Button from "../../Button/Button";
import Checkbox from "./Checkbox/Checkbox";

// Importing the style file
import "./Item.css";

// Creating the Item component
const Item = ({ label, id, completed, update, remove }) => {
  // Funciton that will remove an item
  const removeItem = () => {
    remove(id);
  };

  // Function that will handle the update
  const updateItem = (updated) => {
    update(id, updated);
    console.log(updated);
  };

  return (
    <li>
      <div className="label">
        <Checkbox checked={completed} update={updateItem} /> {label}
      </div>
      <Button label="Remove" icon={<UilTrashAlt />} del click={removeItem} />
    </li>
  );
};

// Exporting the Item component
export default Item;
