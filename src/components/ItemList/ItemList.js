import React from "react";

// Importing the costume components
import Item from "./Item/Item";

// Importing the style file
import "./ItemList.css";

// Creating the ItemList component
const ItemList = () => {
  return (
    <div className="item-list-container">
      <h2>Todo List</h2>
      <ul>
        <Item label="task1" />
        <Item label="task2" />
        <Item label="task3" />
        <Item label="task4" />
        <Item label="task1" />
        <Item label="task2" />
        <Item label="task3" />
        <Item label="task4" />
        <Item label="task1" />
        <Item label="task2" />
        <Item label="task3" />
        <Item label="task4" />
      </ul>
    </div>
  );
};

// Exporting the ItemList component
export default ItemList;
