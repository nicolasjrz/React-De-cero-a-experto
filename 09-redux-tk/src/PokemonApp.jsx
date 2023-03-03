import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  const {
    page,
    pokemons = [],
    isLoading,
  } = useSelector((state) => state.pokemon);

  console.log(isLoading);
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>pokemin app</h1>
      <hr />
      <span>Loading: {isLoading ? "true" : "false"} </span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        next
      </button>
    </>
  );
};
