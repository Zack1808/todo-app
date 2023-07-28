import React from "react";

// Importing the costume components
import Item from "./Item/Item";

// Importing the style file
import "./ItemList.css";

// Creating the ItemList component
const ItemList = ({ items, update, remove }) => {
  return (
    <div className="item-list-container">
      <h2>Todo List</h2>
      <ul>
        {items.length > 0 ? (
          items.map((item) => (
            <Item
              id={item.id}
              label={item.label}
              key={item.id}
              completed={item.completed}
              update={update}
              remove={remove}
            />
          ))
        ) : (
          <li>No items</li>
        )}
      </ul>
    </div>
  );
};

// Exporting the ItemList component
export default ItemList;
