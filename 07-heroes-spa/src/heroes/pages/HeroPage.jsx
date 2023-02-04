import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return <div>Hero</div>;
};
