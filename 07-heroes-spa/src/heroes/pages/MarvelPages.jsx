import React from "react";
import { HeroList } from "../components";

export const MarvelPages = () => {
  return (
    <>
      <h1>DC comics</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </>
  );
};
