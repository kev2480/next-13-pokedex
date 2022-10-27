import SingularPokemon from "./SingularPokemonType";
import axios from "axios";

export interface PokemonDetails {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous?: any;
  results: PokemonDetails[];
}

export const getPokemon = async (page?: number): Promise<PokemonResponse> => {
  const limit = 20;
  const offset = (page || 0) * limit;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  console.log(`Fetching ${url}`);
  const res = await axios.get(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.data;
}

export const getSingularPokemon = async (name: string): Promise<SingularPokemon> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  console.log(`Fetching ${url}`);
  const res = await axios.get(url);

  // try {
  //   const json = await res.json();
  //   console.log({json});
  // } catch (err) {
  //   console.log("ERROR", err)
  // }
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.data;
}
