import { combineReducers } from '@reduxjs/toolkit';
import { todosApi } from "./api";
import { counterSlice, pokemonSlice } from './slices';

const { reducer: counter } = counterSlice;
const { reducer: pokemons } = pokemonSlice;
const { reducer: todos, reducerPath: todosPath } = todosApi;

export const rootReducer = combineReducers({
  counter,
  pokemons,
  [todosPath]: todos,
});

export type RootState = ReturnType<typeof rootReducer>;