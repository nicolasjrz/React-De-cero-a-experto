import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadingEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvenet,
} from "../../../store/calendar/calendarSlice";
import {
  calendarWithActiveEventState,
  calendarWithEventsState,
  events,
  initialCalendarState,
} from "../__fixtures/calendarState";

describe("Pruebas en calendarSlice", () => {
  test("debe de regresar el estado por defecto ", () => {
    const state = calendarSlice.getInitialState();

    expect(state).toEqual(initialCalendarState);
  });

  test("onSetActiveEvent  debe activar el evento", () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0])
    );

    expect(state.activeEvent).toEqual(events[0]);
  });

  test("onAddNewEvent debe agregar un nuevo evento", () => {
    const newEvent = {
      id: "3",
      title: "nota test 3",
      notes: "prueba de nota 3",
      start: new Date("2022-10-21 13:00:00"),
      end: new Date("2022-10-21 15:00:00"),
      bgColor: "#fafafa",
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );

    expect(state.events).toEqual([...events, newEvent]);
  });

  test("onUpdateEvenet debe actualizar un nuevo evento", () => {
    const updateEvent = {
      id: "1",
      title: "nota test actuzalizada",
      notes: "prueba de nota actuzalizada",
      start: new Date("2022-10-21 13:00:00"),
      end: new Date("2022-10-21 15:00:00"),
      bgColor: "#fafafa",
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvenet(updateEvent)
    );

    expect(state.events).toContain(updateEvent);
  });

  test("onDeleteEvent debe de borrar el evento activo ", () => {
    const event = {
      id: "1",
      title: "nota test",
      notes: "prueba de nota",
      start: new Date("2022-10-21 13:00:00"),
      end: new Date("2022-10-21 15:00:00"),
      bgColor: "#fafafa",
    };

    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onDeleteEvent(event)
    );

    expect(state.activeEvent).toBe(null);
    expect(state.events).not.toContain(event[0]);
  });

  test(" onLoadingEvents debe de establecer los eventos ", () => {
    const state = calendarSlice.reducer(
      initialCalendarState,
      onLoadingEvents(events)
    );
    expect(state.isLoadingEvents).toBeFalsy();
    expect(state.events.length).not.toBe(0);
    expect(state.events).toEqual(events);

    const newState = calendarSlice.reducer(state, onLoadingEvents(events));
    expect(state.events.length).toBe(newState.events.length);
  });

  test(" onLogoutCalendar debe limpiar los estados ", () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onLogoutCalendar()
    );

    expect(state).toEqual(initialCalendarState);
  });
});
