import React from "react";

export const TodoItem = ({
  id,
  desciption,
  done,
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <>
      <li key={id} className="list-group-item d-flex justify-content-between">
        <span
          aria-label="span"
          className={`align-self-center ${
            done ? "text-decoration-line-through" : ""
          }`}
          onClick={() => onToggleTodo(id)}
        >
          {desciption}
        </span>{" "}
        <button
          aria-label="button"
          className="btn btn-danger "
          onClick={() => onDeleteTodo(id)}
        >
          X
        </button>
      </li>
    </>
  );
};
