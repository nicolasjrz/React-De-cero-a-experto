import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<JournalPage />} />

      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
