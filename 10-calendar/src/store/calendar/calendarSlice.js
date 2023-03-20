import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tenoEvent = {
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
  },
});
export const {} = calendarSlice.actions;
