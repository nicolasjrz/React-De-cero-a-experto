import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ list = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      {list.map((elem) => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          desciption={elem.description}
          done={elem.done}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </>
  );
};
