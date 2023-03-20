import React from "react";
import { useCalendarStore } from "../../hooks/useCalendarStore";

export const FabDelete = () => {
  const { startDeleteEvent, hasEventSelected } = useCalendarStore();

  const onDelete = () => {
    startDeleteEvent();
  };

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={onDelete}
      style={{ display: hasEventSelected ? "" : "none" }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
