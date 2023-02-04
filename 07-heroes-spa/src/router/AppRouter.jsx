import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="/*" element={<HeroesRoutes />}></Route>
      </Routes>
    </>
  );
};
