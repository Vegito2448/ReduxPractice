import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface Result {
  name: string;
  url: string;
}


export interface PokemonState {
  page?: number;
  loading?: boolean;
  pokemons: Result[];
}

const initialState: PokemonState = {
  page: 0,
  loading: false,
  pokemons: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.loading = true;
    },
    setPokemons: (state, action: PayloadAction<PokemonState>) => {

      console.log(`🚀 ~ action:`, action);


      state.loading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    }
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

