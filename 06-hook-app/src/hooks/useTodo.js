import { useEffect, useReducer } from "react";
import { todoReducer } from "../09-useReducer/TodoReducer";

export const useTodo = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const handleNewTodo = (todo) => {
    const action = { type: "send", payload: todo };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({ type: "remove", payload: id });
  };

  const onToggleTodo = (id) => {
    dispatchTodo({ type: "toggleTodo", payload: id });
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoCount = todos.length;

  const pendingTodos = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    todoCount,
    pendingTodos,
  };
};
