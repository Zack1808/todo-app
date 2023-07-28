// Importing the functions
import { addItem, updateItem, deleteItem } from "../funcitons/todoFunctions";

// Creating and exporting the actions
export const ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  UPDATE: "UPDATE",
};

// Creating the reducer
export const todoReducer = (action, item, setTodos, id, update) => {
  switch (action) {
    case ACTIONS.ADD:
      addItem(item, setTodos);
      break;
    case ACTIONS.UPDATE:
      updateItem(id, setTodos, update);
      break;
    case ACTIONS.REMOVE:
      deleteItem(id, setTodos);
      break;
    default:
      break;
  }
};
