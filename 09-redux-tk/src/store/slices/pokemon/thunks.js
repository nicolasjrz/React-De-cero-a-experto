import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispach, getState) => {
    dispach(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );

    dispach(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
