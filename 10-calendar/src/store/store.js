import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar/calendarSlice";
import { uiSlice } from "./iu/uiSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
  },
});
