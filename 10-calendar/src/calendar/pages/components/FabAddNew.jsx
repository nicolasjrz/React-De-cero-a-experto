import { addHours } from "date-fns";
import React from "react";
import { useCalendarStore } from "../../../hooks/useCalendarStore";
import { useIuStore } from "../../../hooks/useUiStore";

export const FabAddNew = () => {
  const { openDateModal } = useIuStore();
  const { setActiveEvent } = useCalendarStore();
  const onClickNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: 123,
        name: "nicolas",
      },
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={onClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
