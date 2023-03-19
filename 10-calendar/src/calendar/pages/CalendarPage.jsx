import React from "react";
import { Navbar } from "./components/Navbar";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import enUS from "date-fns/locale/en-US";
import { addHours, format, parse, startOfWeek, getDay } from "date-fns";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "nota test",
    notes: "prueba de nota",
    start: new Date(),
    end: addHours(new Date(), 2),
  },
];

export const CalendarPage = () => {
  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  );
};
