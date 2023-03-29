import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { convertEventsToDateEvent } from "../helpers/convertEventsToDateEvent";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvenet,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvenet({ ...calendarEvent }));
    } else {
      const { data } = await calendarApi.post("/event", calendarEvent);
      dispatch(
        onAddNewEvent({ ...calendarEvent, id: data.evento.id, user: user })
      );
    }
  };

  const startDeleteEvent = () => {
    dispatch(onDeleteEvent());
  };

  const startLoadingEvent = async () => {
    try {
      const { data } = await calendarApi.get("/event");

      const events = convertEventsToDateEvent(data.eventos);
    } catch (error) {
      console.log("error al cargar eventos");
      console.log(error);
    }
  };

  return {
    events,
    activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent,
    hasEventSelected: !!activeEvent,
    startLoadingEvent,
  };
};
