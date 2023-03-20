import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tenoEvent = {
  _id: "124125123",
  title: "nota test",
  notes: "prueba de nota",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: 123,
    name: "nicolas",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tenoEvent],
    activeEvent: null,
  },
  reducers: {
    funtionName: (state /*,action */) => {},
    onSetActiveEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
  },
});
export const { onSetActiveEvent } = calendarSlice.actions;
