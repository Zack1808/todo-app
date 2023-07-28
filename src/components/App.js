import React from "react";

// Importing costume components
import Form from "./Form/Form";
import ItemList from "./ItemList/ItemList";

// Imoprting the style file
import "./App.css";

// Creating the App component
const App = () => {
  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <Form label="Add new Item" placeholder="Enter item..." />
      <ItemList />
    </div>
  );
};

// Exporting the App component
export default App;
