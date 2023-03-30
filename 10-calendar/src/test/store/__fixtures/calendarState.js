export const events = [
  {
    id: "1",
    title: "nota test",
    notes: "prueba de nota",
    start: new Date("2022-10-21 13:00:00"),
    end: new Date("2022-10-21 15:00:00"),
    bgColor: "#fafafa",
  },
  {
    id: "2",
    title: "nota test 2",
    notes: "prueba de nota 2",
    start: new Date("2022-10-21 13:00:00"),
    end: new Date("2022-10-21 15:00:00"),
    bgColor: "#fafafa",
  },
];

export const initialCalendarState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
