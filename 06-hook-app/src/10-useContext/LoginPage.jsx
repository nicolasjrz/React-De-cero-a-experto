import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { hola } = useContext(UserContext);

  return (
    <>
      <h2>LoginPage</h2>
      <hr />
      <p>Hola {hola} !!</p>
    </>
  );
};
