import React, { useState } from "react";

// Importing costume components
import Form from "./Form/Form";
import ItemList from "./ItemList/ItemList";

// Importing the reducers
import { ACTIONS, todoReducer } from "../reducers/todoReducer";

// Imoprting the style file
import "./App.css";

// Creating the App component
const App = () => {
  // Setting up the state
  const [todos, setTodos] = useState([]);

  // Function that will handle adding the new todo item
  const submition = (item) => {
    todoReducer(ACTIONS.ADD, item, setTodos, "", "");
  };

  const remove = (id) => {
    todoReducer(ACTIONS.REMOVE, "", setTodos, id, "");
  };

  const update = (id, update) => {
    todoReducer(ACTIONS.UPDATE, "", setTodos, id, update);
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
      <ItemList items={todos} remove={remove} update={update} />
    </div>
  );
};

// Exporting the App component
export default App;
