import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { convertEventsToDateEvent } from "../helpers/convertEventsToDateEvent";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadingEvents,
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
    try {
      if (calendarEvent.id) {
        //actualizando
        await calendarApi.put(`/event/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvenet({ ...calendarEvent, user: user }));
        return;
      }

      ///creando
      const { data } = await calendarApi.post("/event", calendarEvent);
      dispatch(
        onAddNewEvent({ ...calendarEvent, id: data.evento.id, user: user })
      );
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", error.response.data.msg, "error");
    }
  };

  const startDeleteEvent = async () => {
    try {
      await calendarApi.delete(`/event/${activeEvent.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  const startLoadingEvent = async () => {
    try {
      const { data } = await calendarApi.get("/event");

      const events = convertEventsToDateEvent(data.eventos);

      dispatch(onLoadingEvents(events));
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
