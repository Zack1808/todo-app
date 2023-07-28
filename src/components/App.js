import React, { useState } from "react";

// Importing costume components
import Form from "./Form/Form";
import ItemList from "./ItemList/ItemList";

// Imoprting the style file
import "./App.css";

// Creating the App component
const App = () => {
  // Setting up the state
  const [todos, setTodos] = useState([]);

  // Function that will handle adding the new todo item
  const submition = (item) => {
    setTodos((prevState) => {
      const data = {
        id: crypto.randomUUID(),
        label: item,
        completed: false,
        completionDate: "",
      };
      return [...prevState, data];
    });
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <Form
        label="Add new Item"
        placeholder="Enter item..."
        submit={submition}
      />
      {console.log(todos)}
      <ItemList items={todos} />
    </div>
  );
};

// Exporting the App component
export default App;
