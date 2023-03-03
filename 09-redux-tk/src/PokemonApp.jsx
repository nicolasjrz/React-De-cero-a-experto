import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>pokemin app</h1>
      <hr />
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </>
  );
};
