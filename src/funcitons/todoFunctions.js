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
export const updateItem = (id, setItem, completed) => {
  setItem((prevState) =>
    prevState.map((prev) => (prev.id === id ? { ...prev, completed } : prev))
  );
};

// Function that will delete the item for the list
export const deleteItem = (id, setTodos) => {
  setTodos((prevState) => prevState.filter((prev) => prev.id !== id));
};
