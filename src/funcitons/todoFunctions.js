// Function that will add the to the todos list
export const addItem = (item, setTodos) => {
  setTodos((prevState) => {
    return [
      ...prevState,
      {
        id: crypto.randomUUID(),
        label: item,
        completed: false,
      },
    ];
  });
};

// Function that updates the completion state
export const updateItem = (id, setItem, update) => {
  setItem((prevState) => {
    const index = prevState.findIndex((obj) => obj.id === id);
    prevState[index].completed = update;
    return [...prevState];
  });
};

// Function that will delete the item for the list
export const deleteItem = (id, setTodos) => {
  setTodos((prevState) => {
    const index = prevState.findIndex((obj) => obj.id === id);
    prevState.splice(index, 1);
    return [...prevState];
  });
};
