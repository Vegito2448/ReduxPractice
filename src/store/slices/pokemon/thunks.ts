import { pokeApi } from "../../../api";
import { AppThunk } from "../../store";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";


export interface Pokemons {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export const getPokemons = (page = 0): AppThunk =>
  async (dispatch) => {
    dispatch(startLoadingPokemons());

    // todo make api call
    // const response: Promise<Pokemons> = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`).then((res) => res.json());

    const { data } = await pokeApi.get<Pokemons>(`/pokemon?limit=10&offset=${page * 10}`);

    console.log(`🚀 ~ response:`, data);

    dispatch(setPokemons({ page: page + 1, pokemons: data.results, }));
  };
