import React from "react";
import { useForm } from "../../hooks/useForm";
export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, handleReset } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.trim().length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    handleReset();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="que hay que hacer?"
          className="form-control"
          onChange={onInputChange}
          name="description"
          value={description}
        />
        <button type="submit" className="btn btn-primary mt-2">
          agregar
        </button>
      </form>
    </>
  );
};
