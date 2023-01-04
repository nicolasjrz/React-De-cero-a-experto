export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "send":
      return [...initialState, action.payload];

    case "remove":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "toggleTodo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
