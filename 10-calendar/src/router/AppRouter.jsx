import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { getEnvVariable } from "../helpers/getEnvVariable";

export const AppRouter = () => {
  const auhtStatus = "not-auth";

  return (
    <Routes>
      {auhtStatus === "not-auth" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
