import React, { useState } from "react";
import { useGetTodosQuery, useGetTodosIdQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  //const { data: todos = [], isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);

  const { data: todo, isLoading } = useGetTodosIdQuery(todoId);

  const preTodo = () => {
    setTodoId(todoId - 1);
  };

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  return (
    <div>
      <h1>todo - rtk query</h1>
      <hr />
      <h4>isLoading:{isLoading ? "true" : "false"}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? " DONE " : " Pending "}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <button onClick={preTodo}>pre todo</button>
      <button onClick={nextTodo}>next todo</button>
    </div>
  );
};
