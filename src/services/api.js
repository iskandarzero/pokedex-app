export async function getPokemon(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
  const response = await fetch(url);
  const data = response.json();

  return data;
}

export async function getPokemonSpecie(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.toLowerCase()}`;
  const response = await fetch(url);
  const data = response.json();

  return data;
}

export async function getEvolutionChain(url) {
  const response = await fetch(url);
  const data = response.json();

  return data;
}