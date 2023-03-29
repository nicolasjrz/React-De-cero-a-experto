import { createSlice } from "@reduxjs/toolkit";

// const tenoEvent = {
//   _id: "124125123",
//   title: "nota test",
//   notes: "prueba de nota",
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: "#fafafa",
//   user: {
//     _id: 123,
//     name: "nicolas",
//   },
// };

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
  },
  reducers: {
    funtionName: (state /*,action */) => {},
    onSetActiveEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvenet: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter((event) => {
          event._id !== state.activeEvent._id;
        });
        state.activeEvent = null;
      }
    },
    onLoadingEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      payload.forEach((event) => {
        const exists = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!exists) {
          state.events.push(event);
        }
      });
    },
  },
});
export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvenet,
  onDeleteEvent,
  onLoadingEvents,
} = calendarSlice.actions;
